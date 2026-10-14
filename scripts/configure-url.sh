#!/bin/sh
# Usage: sh scripts/configure-url.sh https://your-domain.tld
# Replaces the __SITE_URL__ placeholder (canonical, Open Graph, sitemap, robots, JSON-LD).
set -e
URL="${1%/}"
[ -n "$URL" ] || { echo "Usage: $0 https://your-site-url"; exit 1; }
for f in index.html robots.txt sitemap.xml; do
  sed -i.bak "s#__SITE_URL__#$URL#g" "$f" && rm -f "$f.bak"
done
echo "Configured for $URL"
