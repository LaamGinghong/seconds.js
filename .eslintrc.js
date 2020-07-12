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
  rules: {
    'import/extensions': [
      2,
      'ignorePackages',
      { ts: 'never', tsx: 'never', json: 'never', js: 'never' },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
  },
}
