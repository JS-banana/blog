#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

cd /usr/local/app/vuepress-blog/dist

echo 'start===>git'

git reset --hard origin/master
git clean -f
git pull

echo 'end===>git'

function log_info (){
  DATE_N=`date "+%Y-%m-%d %H:%M:%S"`
  USER_N=`whoami`
  echo "${DATE_N} ${USER_N} execute $0 [INFO] $@" >> /usr/local/app/webhook/logInfo.txt #执行成功日志打印路径
}

function log_error (){
  DATE_N=`date "+%Y-%m-%d %H:%M:%S"`
  USER_N=`whoami`
  echo -e "\033[41;37m ${DATE_N} ${USER_N} execute $0 [ERROR] $@ \033[0m"  >> /usr/local/app/webhook/logError.txt #执行失败日志打印路径
}

if [  $? -eq 0  ]
then
  log_info "$@ sucessed."
  echo -e "\033[32m $@ sucessed. \033[0m"
else
  log_error "$@ failed."
  echo -e "\033[41;37m $@ failed. \033[0m"
  exit 1
fi

cd - # 退回开始所在目录

trap 'fn_log "DO NOT SEND CTR + C WHEN EXECUTE SCRIPT !!!! "'  2

