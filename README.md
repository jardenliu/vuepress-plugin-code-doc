# vuepress-plugin-code-doc
> 🤩🤩🤩Writing Vuepress Documents Like Element-UI

[📚中文文档](./README_CN.md) 丨 [📚English Docs](./README.md)

## Installation
Install plugin for your Vuepress project.
```bash
    $ yarn add vuepress-plugin-code-doc
    #or
    $ npm i vuepress-plugin-code-doc
```

## Usage
In `.vuepress/config.js`, require the plugin and set it to the config. as follow:
```js

const CodeDocPlugin = require('vuepress-plugin-code-doc')
const CodeDocOpt = {}

module.exports = {
    title: 'Vuepress Plugin Code Doc',
    plugins: [[CodeDocPlugin, CodeDocOpt]]
}

```

## Options

| Name               | Description        | type   | Accepted Values | Default |
| ------------------ | ------------------ | ------ | --------------- | ------- |
| schema             | code block mark    | string | ---             | :       |
| scrollViewSelector | scrollViewSelector | string | ---             | html    |
