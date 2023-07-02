module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    "../../../.eslintrc.json"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
}
