#!/usr/bin/env bash
shopt -s extglob
GITHASH=$(git rev-parse HEAD) &&
GITHASH_SHORT=$(git rev-parse --short HEAD) &&
BUILD_DATETIME="$(env TZ='Asia/Hong_Kong' date '+%Y/%m/%d %H:%M') UTC+8" &&
echo "Building $GITHASH ($GITHASH_SHORT) on $BUILD_DATETIME" &&
rm -rf ./_site && mkdir ./_site &&
cp -r !(_site|buildsite.sh) ./_site &&
cd ./_site &&
for file in *.html; do
  sed -i "s|{{GITHASH}}|$GITHASH|g; s|{{GITHASH_SHORT}}|$GITHASH_SHORT|g; s|{{BUILD_DATETIME}}|$BUILD_DATETIME|g" "$file"
done


