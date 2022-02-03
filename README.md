# COVUE

✨✨ **一个快速生成功能全面的vue3模板脚手架**



## 获取方式：

``` node
npm install covue -g
```



## 使用说明：

### 创建vue3项目：

在你要创建项目的目录下输入以下指令：

```node
covue create <project_name>
```

*可用于windows/macOS/linux*

等待一段时间后，会生成一个vue3模板，并且已经下载好依赖。(node_modules)

然后输入以下指令开启项目：

```node
npm run dev
```

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
covue -h/--help     展示所有可用指令
covue -V/--version    展示当前系统版本
covue -f <name>/--framework <name>  展示当前系统，但是当前只支持vue-core
```

### 添加component：

```node
covue add <name>        默认在src/components/ 目录添加 <name>.vue 页面
或
covue add <name> -d <地址>    在指定的<地址>位置添加 <name>.vue 页面
```

**页面模板为：**

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
covue addpage <name>   默认在src/pages/ 目录添加
```

### 添加store：状态管理

```node
covue addstore <name>  默认在src/store  目录添加<name>.ts
或
covue addstore <name> -d <地址>   在指定的<地址>位置添加 <name>.ts
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
    │  │      home.vue
    │  │
    │  ├─login
    │  │      login.vue
    │  │
    │  └─not-found
    │          not-found.vue
    │
    ├─router
    │      index.ts
    │
    ├─service
    │      index.ts
    │
    ├─store
    │      home.ts
    │      index.ts
    │      login.ts
    │
    └─utils
            Cache.js
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

### 脚手架适用范围:

本身的设计是为了方便自己开发， 减少项目搭建所用时间，该脚手架适用于任何场景，模板内容所包含的核心技术为当前最新的vue3及其配件，pinia和router4都是为vue3也就是vue-core量身打造的，配合热度高涨的vite项目打包工具，另外解决了跨域和本地存储问题，并适配axios，为前后端分离项目做好充分的准备。但是对于工程化的专业人员来说，没有配置tslint和prettier等规范化，原因为了方便像我一样的大学生编写🤷‍♂️。

### 预添加功能：

- 添加脚手架功能自选，提高脚手架灵活度（inquirer.js）
- 添加项目搭建动画，提高用户体验好感
- 添加js版本
- 添加ui库预选，tailwind选择性支持
- 添加tslint、prettier预选
- 添加动态路由