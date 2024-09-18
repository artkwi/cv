module.exports = {
    env: {
        browser: true,
        es2020: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'standard', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        semi: 0,
        'no-extra-semi': 0,
        'react/prop-types': 0,
    },
};
