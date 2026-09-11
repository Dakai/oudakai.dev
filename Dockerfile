# Static Astro site — build with Bun, serve the built files with Node.
# No runtime dependencies: the release stage ships dist/ plus the server script.

FROM oven/bun:1-alpine AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM node:24-alpine AS release
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/scripts/run-server.mjs ./scripts/run-server.mjs

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
	CMD node -e "fetch('http://localhost:3000').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"
ENTRYPOINT ["node", "scripts/run-server.mjs"]
