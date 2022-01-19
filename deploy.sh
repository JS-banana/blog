#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# date
nowDate=$(date "+%Y-%m-%d %H:%M:%S")

# 生成静态文件
npm run build
# 生成 xml
npm run build:feed

# 把sitmap.xml复制到dist
cp -f ./sitemap.xml  docs/.vuepress/dist/

# 把 atom.xml 移动到 docs/.vuepress/dist/
cp -f ./atom.xml  docs/.vuepress/dist/

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
