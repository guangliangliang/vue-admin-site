#!/usr/bin/env sh
###
 # @Description: 
 # @Version: 1.0
 # @Autor: unicom
 # @Date: 2021-01-10 09:29:42
 # @LastEditors: unicom
 # @LastEditTime: 2021-01-10 09:32:31
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:guangliangliang/vue-admin-site.git master:gh-pages

cd -
