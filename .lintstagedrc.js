function runFix(/** @type string[] */ files) {
  const fileFlags = files.map((f) => `--file ${f} `);
  return `pnpm fix ${fileFlags.join(" ")}`;
}

module.exports = {
  "./**/*.{ts?(x),scss}": [
    runFix, "pnpm fix:prettier"
  ]
}
