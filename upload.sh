# !/usr/bin/env sh
# 直接通过上传替换源文件进行更新

scp -r ./docs/.vuepress/dist root@101.200.56.164:/usr/local/app/vuepress-blog/
