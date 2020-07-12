module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  settings: {
    'import/resolver': require.resolve('./tsconfig.json'),
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
}
