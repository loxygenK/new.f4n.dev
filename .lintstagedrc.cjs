module.exports = {
  "./src/**/*.{ts,tsx,css,scss}": ["prettier -cw"],
  "./src/**/*.{ts,tsx}": ["eslint"],
  "./src/**/*.{css,scss}": ["stylelint"]
}
