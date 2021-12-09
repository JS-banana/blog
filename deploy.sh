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

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
# echo 'www.ssscode.com\ssscode.com' > CNAME  # 自定义域名

if [ -z "$GITHUB_TOKEN" ]; then
  msg="deploy.sh===>update：${nowDate}"
  githubUrl=git@github.com:JS-banana/vuepress.git
else
  msg="deploy.sh===>update：${nowDate}"
  githubUrl=https://JS-banana:${GITHUB_TOKEN}@github.com/JS-banana/vuepress.git
  git config --global user.name "JS-banana"
  git config --global user.email "sss213018@163.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

# deploy to coding
if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  codingUrl=git@e.coding.net:ssscode/blog/vuepress.git
else
  codingUrl=https://ptzv1yuleer1:${CODING_TOKEN}@e.coding.net/ssscode/blog/vuepress.git #注意！！！这里需要使用coding提供的个人令牌的用户名和token
fi
# git add -A
# git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist


# 区分不同环境部署
# 部署到 github
echo "--开始--打包部署至github的dist文件"

npm run build:github

cp -f ./sitemap.xml  docs/.vuepress/dist/

cp -f ./atom.xml  docs/.vuepress/dist/

cd docs/.vuepress/dist

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

echo "--结束--打包部署至github的dist文件"

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
