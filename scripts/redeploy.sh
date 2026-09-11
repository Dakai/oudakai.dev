#!/usr/bin/env bash
# Dokploy redeploy — update image tag → stop → deploy.
set -euo pipefail

# ─── Configuration ────────────────────────────────────────────────────────────
DOK_HOST="${DOK_HOST:-dok.answer42.xyz}"
REGISTRY_IMAGE="${REGISTRY_IMAGE:-registry.answer42.xyz/oudakai-dev}"
: "${DOK_API_KEY:?set DOK_API_KEY (Dokploy → Settings → API Keys)}"
: "${DOKPLOY_APPLICATION_ID:?set DOKPLOY_APPLICATION_ID (from https://${DOK_HOST}/api/project.all)}"
# ──────────────────────────────────────────────────────────────────────────────

API="https://${DOK_HOST}/api"
TAG="$(git rev-parse --short HEAD)"

post() { curl -sSf -X POST "${API}/$1" -H "x-api-key: ${DOK_API_KEY}" -H "Content-Type: application/json" -d "$2" >/dev/null; }

echo "→ updating image to ${REGISTRY_IMAGE}:${TAG}"
post application.update "{\"applicationId\":\"${DOKPLOY_APPLICATION_ID}\",\"dockerImage\":\"${REGISTRY_IMAGE}:${TAG}\"}"

echo "→ stopping"
post application.stop "{\"applicationId\":\"${DOKPLOY_APPLICATION_ID}\"}"

echo "→ deploying"
post application.deploy "{\"applicationId\":\"${DOKPLOY_APPLICATION_ID}\"}"

echo "✓ deployed ${REGISTRY_IMAGE}:${TAG}"
