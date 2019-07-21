import CodeBlock from './CodeBlock.vue'

const components = {
    CodeBlock
}

const install = Vue => {
    for (let key in components) {
        vue.component(key, components[key])
    }
}

export default {
    ...components,
    install
}
