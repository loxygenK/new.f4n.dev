module.exports = {
  plugins: "stylelint-scss",
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier"
  ],
  rules: {
    "selector-class-pattern": "[a-z_]+"
  }
}
