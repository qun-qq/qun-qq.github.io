---
title: hexo使用说明
date: 2024-06-14 14:44:15
tags: hexo
category: 笔记
toc: true
---

# 环境初始化

1. 下载安装git。。。

2. 下载安装node.js...

3. 把项目clone到本地

4. 项目根目录安装hexo

   ```text
   npm i hexo-cli -g
   hexo init
   npm install
   ```



# 新建文章

```
hexo n [文章类型] "文章名"'
example: hexo n "第一篇文章"
```



# 部署

```
hexo clean # 清除
hexo g # 生成页面
hexo d # 部署
hexo s # 启动本地服务
```



# 上传到github

```
git add .
git commit -m "修改说明"
git push origin hexo
```



