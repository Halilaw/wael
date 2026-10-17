#!/bin/sh
# Point the whole site at its public address (canonical links, social previews, sitemap, contact card).
# Usage:  sh scripts/configure-url.sh https://halilaw.github.io/wael
set -e
cd "$(dirname "$0")/.."
NEW="${1%/}"
[ -n "$NEW" ] || { echo "Usage: sh scripts/configure-url.sh https://your-site-address"; exit 1; }
OLD="$( [ -f site.url ] && cat site.url || echo __SITE_URL__ )"
for f in index.html 404.html data.html dotnet.html devops.html robots.txt sitemap.xml assets/Wael_Halila.vcf .well-known/security.txt; do
  [ -f "$f" ] && sed -i.bak "s#$OLD#$NEW#g" "$f" && rm -f "$f.bak"
done
printf '%s\n' "$NEW" > site.url
echo "Site address set to $NEW"
