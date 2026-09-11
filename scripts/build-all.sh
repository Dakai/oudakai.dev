#!/usr/bin/env bash
# Build the main site + the cobuild demo, then merge both into ./dist.
#
# They cannot share one Astro build (different majors: 5.x vs 7.x), so each
# builds on its own and the outputs are concatenated. `base: '/cobuild'` in
# cobuild's config prefixes every URL it generates; Astro does NOT nest the
# output under the base, hence the copy step below.
set -euo pipefail

COBUILD_DIR="${COBUILD_DIR:-$HOME/Apps/cobuild}"

cd "$(dirname "$0")/.."

echo "→ building main site"
bun run build

echo "→ building cobuild ($COBUILD_DIR)"
(cd "$COBUILD_DIR" && bun run build)

echo "→ merging cobuild into dist/cobuild"
rm -rf dist/cobuild
cp -R "$COBUILD_DIR/dist" dist/cobuild

echo "→ done"
printf '   %s files, %s\n' \
  "$(find dist -type f | wc -l | tr -d ' ')" \
  "$(du -sh dist | cut -f1)"
