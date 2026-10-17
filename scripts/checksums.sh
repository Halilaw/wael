#!/bin/sh
# Rewrite SHA256SUMS.txt so anyone can verify the published files:  sha256sum -c SHA256SUMS.txt
cd "$(dirname "$0")/.."
find . -type f ! -path './.git/*' ! -name SHA256SUMS.txt | sort | xargs sha256sum | sed 's# \./# #' > SHA256SUMS.txt
echo "SHA256SUMS.txt updated ($(wc -l < SHA256SUMS.txt) files)"
