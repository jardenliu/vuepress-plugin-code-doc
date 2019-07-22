module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        jest: true,
        browser: true
    },
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module",
        ecmaFeatures: {
            legacyDecorators: true
        }
    },
    extends: ["standard", "plugin:vue/essential"],
    plugins: ["vue"],
    rules: {
        indent: [2, 4]
    }
};
