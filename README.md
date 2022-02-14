# COVUE

✨✨ **一个快速生成功能全面的 vue3 || node-koa 模板脚手架**

*可用于windows/macOS/linux*

## 获取方式：
打开终端命令行输入：
``` node
pnpm install covue -g
```

*也可以使用npm*


## 使用说明：

### 创建项目：

在你要创建项目的目录下打开终端命令行输入以下指令：
```node
covue create <project_name>
```
选择要生成的项目模板：
```
PS E:\> covue create demo
? 🦄please choose a framework: (Use arrow keys)
> vue-core
  node-koa
```

等待一段时间后，项目自动创建完成，并且已经下载好依赖。(node_modules)

进入项目:
```PowerShell
cd <project_name>
```
使用编辑器打开文件(这里用vsc打开):
```PowerShell
code .
```

然后输入以下指令开启项目：

```node
pnpm run dev
```
> vue3项目启动演示：

> show:
>
>   vite v2.7.13 dev server running at:
>
>   > Local: http://localhost:3000/
>   > Network: use `--host` to expose
>
>   ready in 553ms.



## 指令集：

### 辅助指令：

```
Options:
  -V, --version               output the version number
  -c --coisini                a coisini vue3 cli
  -d --dest <dest>            a destination folder
  -f --framework <framework>  your frameword
  -h, --help                  display help for command
```



### 添加component：

```node
covue add <name>        默认在src/components/ 目录添加 <name>.vue 页面
或
covue add <name> -d <地址>    在指定的<地址>位置添加 <name>.vue 页面
例如: covue add navBar -d src/pages
```

**页面模板：**

```vue
<template>
  <div class="<name>">
    <h2> <name> </h2>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.<name> {
}
</style>
```

该指令初衷为添加一个vue的组件，但是也可以在项目任意位置添加一个vue页面。



### 添加page：添加新的页面，自动生成路由

```node
covue addpage <name>   默认在src/pages 目录添加<name>文件夹，文件夹中有三个文件，分别是page、type、router
或
covue addpage <name> -d <地址>  在指定的<地址>位置添加
```

**page模板：**

```vue
<template>
  <div class="<name>">
    <h2> <name> </h2>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.<name> {
}
</style>
```

**router模板：**

```tsx
const <name> = () => import('./<name>.vue')
export default {
  path: '/<name>',
  name: '<name>',
  component: <name>,
  children: [
  ]
}
```

**type模板：**

```tsx
export interface I<name> {

}
```



### 添加store：状态管理

```node
covue addstore <name>  默认在src/store  目录添加<name>文件夹，文件夹中包含<name>.ts 和type.ts
或
covue addstore <name> -d <地址>   在指定的<地址>位置添加
```

**页面模板为：**

```tsx
import { defineStore } from "pinia";

export const homeStore = defineStore("<name>", {
  // data
  state: () => {
    return {};
  },
  // computed
  getters: {},
  // methods
  actions: {},
});
```

**type模板：**

```tsx
export interface I<name> {

}
```



## 模板目录：

```
│  .browserslistrc
│  .editorconfig
│  .gitignore
│  index.html
│  LICENSE
│  package-lock.json
│  package.json
│  README.md
│  tsconfig.json
│  vite.config.ts
│
├─.vscode
│      extensions.json
│
├─public
│      favicon.ico
│
└─src
    │  App.vue
    │  env.d.ts
    │  main.ts
    │
    ├─assets
    │      logo.png
    │
    ├─components
    │      HelloWorld.vue
    │
    ├─pages
    │  ├─home
    │  │      index.vue
    │  │      router.ts
    │  │      type.ts
    │  │
    │  ├─login
    │  │      index.vue
    │  │      router.ts
    │  │      type.ts
    │  │
    │  └─notfound
    │          index.vue
    │          router.ts
    │          type.ts
    │
    ├─router
    │      index.ts
    │
    ├─service
    │      index.ts
    │
    ├─store
    │  ├─home
    │  │      home.ts
    │  │      type.ts
    │  │
    │  ├─index
    │  │      index.ts
    │  │      type.ts
    │  │
    │  └─login
    │          login.ts
    │          type.ts
    │
    └─utils
            Cache.ts
            firstUpperCase.ts
```

### 模板包含：

- vue3(vue-core) + typescript支持
- vite
- router4(The official router for Vue.js)
- pinia(状态管理工具)
- directory alias('@/')
- 跨域请求(proxy)
- 代码规范(editorconfig)，没有使用tslint或prettier
- axios支持
- 存储转化工具(sessionStorage/localStorage)
- 浏览器适配范围
- 路由守卫(可选)
- 404拦截
- 动态路由(根据pages文件结构生成路由)

### 脚手架适用范围：

本身的设计是为了方便自己开发， 减少项目搭建所用时间，该脚手架适用于任何场景，模板内容所包含的核心技术为当前最新的vue3及其配件，pinia和router4都是为vue3也就是vue-core量身打造的，配合热度高涨的vite项目打包工具，另外解决了跨域和本地存储问题，并适配axios，为前后端分离项目做好充分的准备。但是对于工程化的专业人员来说，没有配置tslint和prettier等规范化，原因为了方便像我一样的大学生编写🤷‍♂️。另外路由只是简单的将pages文件夹下所有的页面进行获取动态添加，没有根据权限进行分配。🤦‍♂️

### 预添加功能：

- 添加脚手架功能自选，提高脚手架灵活度（inquirer.js）✅
- 添加项目搭建动画，提高用户体验好感
- 添加js版本
- 添加node-koa创建✅
- 添加ui库预选，tailwind选择性支持
- 添加tslint、prettier预选

### 通知：
无法指定路径bug已修复，可以通过-d指令自由选择添加组件或页面的位置了。

---
## Version 1.2.0:
**添加了node-koa模板生成，为服务器的搭建也提供充足的便利。**

### 模板目录结构：
```
│  .env
│  .gitignore
│  LICENSE
│  main.js
│  package-lock.json
│  package.json
│  README.md
│
├─app
│      config.js
│      database.js
│      main.js
│      router.js
│
├─controller
│      authorization.js
│      user.js
│
├─errors
│      error-types.js
│      error.js
│
├─keys
│      private.key
│      public.key
│
├─middleware
│      md5-crypto.js
│      verify.js
│
├─router
│      user.js
│
├─service
│      user.js
│
└─utils
        pwd-handle.js
```

### 模板内容包含：
- 注册功能
- 登录验证
- 用户名、密码合法性验证
- jwt身份验证，验证算法采用RS256非对称加密
- 动态加载后端路由接口
- 密码MD5加密
- dotenv加载环境变量配置
- mysql2数据库连接
- 错误处理封装
- json数据解析，方便接受前端请求


### node-koa框架模板介绍：
该模板的使用首先需要完成以下几个步骤：
1. 在.env文件下配置好自己的数据库信息
2. 使用openssl（其它方法也可）在keys目录下生成公钥和密钥，注意不要将密钥公开。
3. 启动项目 `pnpm(npm) run dev`

该模板方便我们使用koa搭建后端服务器，初步功能已经集成完毕，为我们搭建项目提供便利，提高开发效率。较完善的处理了登录注册的一系列验证和功能，可以使我们尽快投入业务处理。
