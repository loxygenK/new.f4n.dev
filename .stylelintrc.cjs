/**
 * @type {import("stylelint").Config}
 */
module.exports = {
  "extends": [
    "stylelint-config-prettier-scss",
    "stylelint-config-standard-scss",
  ],
  "rules": {
    "color-hex-length": "long"
  }
};
