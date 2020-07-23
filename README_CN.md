# vuepress-plugin-code-doc
> 🤩🤩🤩像饿了么UI一样写文档。

[📚中文文档](./README_CN.md) 丨 [📚English Docs](./README.md)

## 安装
安装插件包到项目：
```bash
    $ yarn add vuepress-plugin-code-doc
    #or
    $ npm i vuepress-plugin-code-doc
```

## 使用
在 `.vuepress/config.js`, 添加插件依赖，在配置中添加插件配置，如下所示：
```js

const CodeDocPlugin = require('vuepress-plugin-code-doc')
const CodeDocOpt = {}

module.exports = {
    title: 'Vuepress Plugin Code Doc',
    plugins: [[CodeDocPlugin, CodeDocOpt]]
}

```

## 配置项

| Name               | Description        | type   | Accepted Values | Default |
| ------------------ | ------------------ | ------ | --------------- | ------- |
| schema             | 代码块的标记    | string | ---             | :       |
| scrollViewSelector | 滚动视图的选择器 | string | ---             | html    |
