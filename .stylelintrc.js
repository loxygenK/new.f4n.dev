module.exports = {
  plugins: "stylelint-scss",
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier"
  ],
  rules: {
    // Selector should use snake_case
    // (To avoid problems around CSS Modules)
    "selector-class-pattern": "[a-zA-Z][0-9a-zA-Z_]*",

    // Allow any empty lient between CSS Declaration
    "declaration-empty-line-before": null,

    // Always use percentage specification for alpha value (opacity)
    "alpha-value-notation": "percentage"
  }
}
