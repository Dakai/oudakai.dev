#!/usr/bin/env bash
# Build + tag + push the Docker image for Dokploy deployment.
set -euo pipefail

# ─── Configuration ────────────────────────────────────────────────────────────
REGISTRY_IMAGE="${REGISTRY_IMAGE:-registry.answer42.xyz/oudakai-dev}"
# ──────────────────────────────────────────────────────────────────────────────

TAG="$(git rev-parse --short HEAD)"

echo "→ building ${REGISTRY_IMAGE}:${TAG}"
docker buildx build -t "${REGISTRY_IMAGE}:${TAG}" .

echo "→ pushing ${REGISTRY_IMAGE}:${TAG}"
docker push "${REGISTRY_IMAGE}:${TAG}"

echo "✓ built and pushed ${REGISTRY_IMAGE}:${TAG}"
