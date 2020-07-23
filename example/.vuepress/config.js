const { name, description } = require('../../package.json')

const CodeDocPlugin = require('../../src')

module.exports = {
    title: 'Vuepress Plugin Code Doc',
    base: `/${name}/`,
    description,
    plugins: [[CodeDocPlugin, {}]]
}
