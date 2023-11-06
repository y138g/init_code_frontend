# 前端初始化项目模板

## 项目介绍

本项目是以 vue3 + Arco design 构建的手写前端项目模板（通用布局、权限管理、状态管理、菜单生成），用于项目快速构建。

同时利于只学后端的小伙伴快速搭一套能用的前端便于测试。



## 技术选型

+ Vue 3
+ Vue-CLI 脚手架
+ Vuex 状态管理
+ Arco Design 组件库
+ 前端工程化：ESLint + Prettier + TypeScript



## 快速启动

### 环境配置

nodeJS 版本：**v18.16.0 或 16**

检测命令：

```shell
node -v
```

切换和管理 node 版本的工具：https://github.com/nvm-sh/nvm



npm 版本：8.19.x 以上

```shell
npm -v
```



### 初始化

使用 [vue-cli 脚手架](https://cli.vuejs.org/zh/)



安装脚手架工具：

```shell
npm install -g @vue/cli
```



检测是否安装成功：

```shell
vue -V
```

如果找不到命令，建议重新安装 npm



### 前端工程化配置

脚手架已经帮我们配置了代码美化、自动校验、格式化插件等，无需再自行配置



1) 如果使用的是webstorm，需要开启代码美化插件：



​		语言和框架->JavaScript->prettier：

​		√ 执行“重新格式化代码”操作时



​		语言和框架->JavaScript->代码质量工具->ESLint：

​		√ 自动 ESLint 配置



在 vue 文件中执行格式化快捷键 ctrl + shift + L，不报错，表示配置工程化成功

脚手架自动整合了 vue-router



2) 如果是在vscode：

我也不会哈哈，实在不行百度一下吧



### 引入组件

> Vue Router 路由组件已自动引入，无需再引入：https://router.vuejs.org/zh/introduction.html



组件库：https://arco.design/vue
快速上手：https://arco.design/vue/docs/start



执行安装：

```Shell
npm install --save-dev @arco-design/web-vue
```

### 启动

找到 package.json 包，启动 "serve" 。

> 注意：如果执行报错，大概率是因为 ESLint 格式问题，需要到每个文件里进行格式化操作。