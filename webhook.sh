# ! /bin/bash
# 确保脚本抛出遇到的错误
set -e

cd /usr/local/app/vuepress-blog/dist

echo 'start===>git'

git reset --hard origin/master
git clean -f
git pull
git checkout master

echo 'end===>git'

echo 'start===>create webhook.sh'

# 生成webhook.sh文件 fix线上更新后无文件
cat>webhook.sh<<EOF
# ! /bin/bash
# 确保脚本抛出遇到的错误
set -e

git reset --hard origin/master
git clean -f
git pull
git checkout master
EOF

echo 'end===>create webhook.sh'
