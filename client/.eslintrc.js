module.exports = {
  root: true,
  plugins: [
    "jsx-a11y",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "react-app",
    "standard-with-typescript",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
    "prettier/standard",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "prettier/prettier": "error",
  },
};
