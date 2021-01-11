#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo 'ssscode.com' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy.sh===>'
  githubUrl=git@github.com:JS-banana/vuepress.git
else
  msg='deploy.sh===>来自github actions的自动部署'
  githubUrl=https://JS-banana:${GITHUB_TOKEN}@github.com/JS-banana/vuepress.git
  git config --global user.name "JS-banana"
  git config --global user.email "sss213018@163.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

# deploy to coding
echo 'www.ssscode.com\ssscode.com' > CNAME  # 自定义域名
if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  codingUrl=git@e.coding.net:ssscode/blog/vuepress.git
else
  codingUrl=https://asdJimNXfh:${CODING_TOKEN}@e.coding.net/blog/vuepress.git #注意！！！这里需要使用coding提供的个人令牌的用户名和token
fi
git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist