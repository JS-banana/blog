# !/usr/bin/env sh

# 直接通过上传替换源文件进行更新
# scp -r ./docs/.vuepress/dist root@ssscode.com:/usr/local/app/vuepress-blog/

# 同步到coding
echo '开始push到 coding =======start'

msg='来自github actions的自动部署'
codingUrl=git@e.coding.net:ssscode/blog/vuepress.git

git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding

echo '结束push到 coding =======end'