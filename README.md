## activity-framework

用于快速创建活动的preact框架，不包含测试模块。



## 快速概述

```
git clone ...
npm i 
npm run dev
```

然后打开http://localhost:8080/查看您的项目。
准备部署到生产环境时，使用npm run build打包生产。

[demo](https://by-healthfed.github.io/activity-framework)

> 当然这步交由运维打包发布更好，详见[运维发布项目](#deploy)



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



## webpack打包环境变量

\_\_UAT\_\_:  测试环境,

 \_\_PRO\_\_: 生产环境

 \_\_PUBLICKPATH\_\_:公共path，默认为当前相对路径  `./`，

> 当cdn打包时\_\_PUBLICKPATH\_\_则为cdn路径  `http://cdn-yyj.4000916916.com/yourpath`

使用方式参考 `./src/config.js`



## script

```
npm run dev
```

开发 hot mode

```
npm run build:uat
```

uat 打包

```
npm run build
```

prd 打包

```
npm run report
```

prd 打包并查看资源大小，以便合理分割代码



## 样式处理

框架支持sass打包，需要支持less等自行处理loader

1、公共样式与私有样式分开处理

 	`./src/style` 下存放公共样式，公共样式不进行模块化处理，可在各组件内部直接引用

	其他组件的私有样式将进行模块化处理

2、sass变量统一引用

	`src/style/variables.scss` 存放全局scss变量，这份变量将被其他scss文件自动引入，而无需在各个文件单独`@import`



## 代码分割

结合webpack4 的Dynamic Imports 与 react-loadable 结合以组件为单位分割优化你的代码。

```javascript
import Loadable from "react-loadable";

// Code-splitting
const View = Loadable({
	loader: () => import(/* webpackChunkName: "Home" */ '~/routes/view'),
	loading(){
		return <div>Loading...</div>;
	}
});
```



## <span id="deploy">运维发布</span>

将打包发布统一交由运维完成，由shell脚本处理项目的拉取、安装、cdn配置、打包编译等工作，减少中间人为操作引起的失误。

> cdn发布时 shell脚本定义cdn变量的名称务必为 PUBLIC_PATH，webpack打包时自动读取变量

```shell
#!/bin/bash
export PUBLIC_PATH=http://cdn-yyj.4000916916.com/yourpath
git clone ...
yarn
yarn build
#scp -r ./build/* ...
```



## ef分支

### UI订制 

```sh

├─ README.md
├─ node_modules 
├─ deployPro.sh
├─ deployUat.sh
├─ package.json
├─ postcss.config.js
├─ src
│  ├─ ...
│  ├─ style
│  │  ├─ common.scss #入口样式，全局样式
│  │  ├─ helper.scss #一些帮助样式，视个人情况引入，打包后会曾20k左右(mg,mgt,mgb,mgl,mgr,pd...)
│  │  ├─ normalize.scss #css reset
│  │  ├─ variables.scss #存放全局变量
├─ theme.config.js #UI订制 设置UI宽度和基准字体大小，scss和js共享这里的变量
├─ webpack.config.js
└─ yarn.lock
```



### theme.config.js

```javascript
{
	width: '750px',
	basefont: '31.2px',
	primary: {
		light: '#e655ff',
		normal: '#9C27B0',
		dark: '#1a0dab'
	}
};
```



**width, basefont**
用于设定UI的原始尺寸和basefontsize

> 程序运行时javascript会根据这些尺寸和当前窗口大小动态设置html,body{font-size: 30px}，同时sass里面将px转换为rem方法也是根据这里定义的设定。



**primary**

用于设定主要颜色，sass变量会根据这里自动生成 \$ primary-light, \$primary, \$primary-dark全局变量在scss文件中引用



**新增弹窗，loading组件**  使用说明见组件内部README.md

```sh
├─ src #开发目录
│  ├─ components #公共组件目录
│  │  ├─ Modal # 弹窗组件
│  │  ├─ Loading # loading组件
│  │  
...
```

