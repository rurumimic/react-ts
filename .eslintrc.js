module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: [
    'standard-with-typescript',
    'prettier',
    'prettier/standard',
    'prettier/@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': 'error'
  }
}
