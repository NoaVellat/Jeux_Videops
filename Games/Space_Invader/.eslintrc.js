module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    'google'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'require-jsdoc': 'off',
    'max-len': ['warn', { code: 120 }],
    'new-cap': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn'
    // La règle 'ban-types' est retirée car non disponible
  },
  ignorePatterns: ['**/node_modules/**', '**/dist/**', '**/vendor/**']
};
