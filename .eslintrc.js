module.exports = {
env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
},
extends: ['google'],
parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
},
rules: {
    'require-jsdoc': 'off',
    'max-len': ['warn', { code: 120 }],
    'no-unused-vars': 'warn',
    'new-cap': 'off'
},
ignorePatterns: ['**/node_modules/**', '**/dist/**', '**/vendor/**']
};