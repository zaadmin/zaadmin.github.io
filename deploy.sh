#!/usr/bin/env sh
###
 # @Descripttion: 
 # @Author: zhangai
 # @Date: 2022-08-30 16:18:40
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 请把 penggang-home/blog-two.git 换成你的项目地址
git push -f git@github.com:zaadmin/web-system-coding.git master:gh-pages

cd -