module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:solid/typescript"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "solid"
  ],
  "rules": {
    "solid/event-handlers": "error",
    "solid/reactivity": "error",
    "solid/no-react-deps": "error",
    "solid/prefer-show": "warn",
  }
}
