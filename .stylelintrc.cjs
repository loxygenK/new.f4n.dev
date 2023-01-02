/**
 * @type {import("stylelint").Config}
 */
module.exports = {
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss",
  ],
  "rules": {
    "color-hex-length": "long",
    "rule-empty-line-before": null,
    "declaration-empty-line-before": null
  }
};
