#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
#echo 'vicxsl.github.io' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:vicxsl/vicxsl.github.io.git
else
  printf "开始github actions的自动部署\n"
  msg='来自github actions的自动部署'
  githubUrl=https://vicxsl:${GITHUB_TOKEN}@github.com/vicxsl/vicxsl.github.io.git
  git config --global user.name "vicxsl"
  git config --global user.email "vicxsl@163.com"
fi
printf "初始化仓库\n"
git init

printf "添加文件到暂存区\n"
git add -A

printf "提交\n"
git commit -m "${msg}"

printf "查看当前仓库的状态\n"
git status

printf "历史提交版本\n"
git log

printf "推送到github gh-pages分支,地址： %s\n" "$githubUrl"
git push -f $githubUrl master:gh-pages
printf "推送完成 \n"

#deploy to coding pages
# echo 'www.xugaoyi.com\nxugaoyi.com' > CNAME  # 自定义域名
# echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

#printf "开始coding pages的自动部署\n"
#if [ -z "$CODING_TOKEN" ]; then # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#  codingUrl=git@e.coding.net:vicsl/CODING-Pages/blog.git
#else
#  codingUrl=https://gFXADQdPoz:${CODING_TOKEN}@e.coding.net/vicsl/CODING-Pages/blog.git
#fi
#
#printf "删除和重新初始化仓库\n"
#rm -rf .git
#
#git init
#
#printf "添加文件到暂存区\n"
#git add -A
#
#printf "提交\n"
#git commit -m "${msg}"
#
#printf "查看当前仓库的状态\n"
#git status
#
#printf "历史提交版本\n"
#git log
#
#printf "推送到coding\n"
#git push -f $codingUrl master
#
#printf "推送完成\n"

cd -
rm -rf docs/.vuepress/dist
