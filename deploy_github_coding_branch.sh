#!/usr/bin/env sh

# 更新日期：2022-08-26
# 推送到GitHub的coding分支用于腾讯云直接监听部署，不在通过coding中转了

# 确保脚本抛出遇到的错误
set -e

# date
nowDate=$(date "+%Y-%m-%d %H:%M:%S")

# 生成静态文件
echo "开始 npm run build:github ====>"
npm run build
echo "结束 npm run build:github ====>"

# 生成 xml
echo "开始生成 sitemap.xml、atom.xml文件 ====>"
npm run build:feed
echo "结束生成 sitemap.xml、atom.xml文件 ====>"

# 把sitmap.xml复制到dist
cp -f ./sitemap.xml  docs/.vuepress/dist/

# 把 atom.xml 移动到 docs/.vuepress/dist/
cp -f ./atom.xml  docs/.vuepress/dist/

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo "开始git提交 ====>"

msg="deploy_github_coding_branch：${nowDate}"
githubUrl=https://JS-banana:${GITHUB_TOKEN}@github.com/JS-banana/blog.git

git config --global user.name "JS-banana"
git config --global user.email "sss213018@163.com"

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:coding # 推送到github

echo "结束git提交 ====>"

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
