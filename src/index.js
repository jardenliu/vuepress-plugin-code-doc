const { resolve } = require('path')
const mdItContainer = require('markdown-it-container')

module.exports = (options, ctx) => {
    const render = (tokens, idx) => {
        return `Demo Block `
    }
    console.log(options)
    console.log(ctx)
    return {
        name: 'vuepress-plugin-code-doc',
        enhanceAppFiles: [resolve(__dirname, 'registerComp.js')],
        extendMarkdown: md => {
            md.use(mdItContainer, 'demo', { render })
        }
    }
}
