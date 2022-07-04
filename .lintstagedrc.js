function runFix(/** @type string[] */ files) {
  const fileFlags = files.map((f) => `--file ${f} `);
  return `pnpm fix ${fileFlags.join(" ")}`;
}

function runStylelintFix(/** @type string[] */ files) {
  return `pnpm stylelint --fix ${files.join(" ")}`;
}

module.exports = {
  "./**/*.{ts?(x),?(s)css}": [
    runFix, "pnpm fix:prettier"
  ],
  "./**/*.?(s)css": [
    runStylelintFix
  ],

}
