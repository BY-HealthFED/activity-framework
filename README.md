## activity-framework

用于快速创建活动的preact框架，不包含测试模块。

## 快速概述

```
git clone ...
npm i 
npm run dev
```

然后打开http://localhost:8080/查看您的项目。
准备部署到生产环境时，使用npm run build打包生产。当然这步交由运维打包发布更好，详见[运维发布项目]()

## 项目结构

```shell
├─ README.md
├─ node_modules 
├─ deployPro.sh #生产环境发布exeample
├─ deployUat.sh #Uat环境发布exeample
├─ package.json
├─ postcss.config.js
├─ src #开发目录
│  ├─ actions.js #redux actions
│  ├─ assets #公共资源目录，内容直接copy不被打包
│  ├─ components #公共组件目录
│  │  ├─ app.js # 路由调度
│  ├─ config.js #定义环境变量下的配置文件
│  ├─ core #核心文件，polyfill、history配置等信息
│  ├─ favicon.ico
│  ├─ index.ejs #ejs 模板文件
│  ├─ index.js #入口文件
│  ├─ reducers.js #redux reduce
│  ├─ routes #路由page页面组件
│  ├─ style #公共样式目录
├─ webpack.config.js
└─ yarn.lock
```

