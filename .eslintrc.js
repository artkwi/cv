module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        'plugin:react/recommended',
        'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        "semi": 0,
        "no-extra-semi": 0,
        "no-implicit-any": 1,
        "react/prop-types": 0
    }
}
