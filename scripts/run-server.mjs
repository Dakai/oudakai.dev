// Local preview server for a built dist/, emulating the deployed Worker's
// behaviour so `_headers` and 404-page handling can be checked before pushing:
// same security headers, /_astro immutable caching, and 404 fallback.
//   bun run build:all && bun run serve
import http from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../dist", import.meta.url));

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

// Astro emits content-hashed files under /_astro/ — safe to cache forever.
const IMMUTABLE = /^\/(?:_astro|fonts|images)\/|\.(?:webp|png|jpe?g|gif|svg|ico|avif|woff2)$/i;

const SECURITY_HEADERS = {
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data:",
    "connect-src 'self'",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; "),
  "Cross-Origin-Opener-Policy": "same-origin",
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

/** Resolve a URL pathname to a real file inside ROOT, or null. */
async function findFile(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null;
  }
  if (decoded.includes("\0")) return null;

  const abs = path.resolve(ROOT, "." + path.posix.normalize(decoded));
  if (abs !== ROOT && !abs.startsWith(ROOT + path.sep)) return null;

  for (const candidate of [abs, path.join(abs, "index.html"), abs + ".html"]) {
    const info = await stat(candidate).catch(() => null);
    if (info?.isFile()) return candidate;
  }
  return null;
}

function send(res, status, file, pathname, headOnly) {
  const headers = {
    ...SECURITY_HEADERS,
    "Content-Type": TYPES[path.extname(file).toLowerCase()] ?? "application/octet-stream",
    "Cache-Control": IMMUTABLE.test(pathname) ? "public, max-age=31536000, immutable" : "public, max-age=0, must-revalidate",
  };
  res.writeHead(status, headers);
  if (headOnly) return res.end();
  createReadStream(file).pipe(res);
}

const server = http.createServer(async (req, res) => {
  const method = req.method ?? "GET";
  if (method !== "GET" && method !== "HEAD") {
    res.writeHead(405, { ...SECURITY_HEADERS, Allow: "GET, HEAD" });
    return res.end();
  }

  const pathname = new URL(req.url ?? "/", "http://localhost").pathname;
  const headOnly = method === "HEAD";
  const file = await findFile(pathname);
  if (file) return send(res, 200, file, pathname, headOnly);

  const notFound = await findFile("/404");
  if (notFound) return send(res, 404, notFound, pathname, headOnly);

  res.writeHead(404, { ...SECURITY_HEADERS, "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not Found");
});

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || "0.0.0.0";
server.listen(port, host, () => console.log(`Server listening on http://${host}:${port}`));
