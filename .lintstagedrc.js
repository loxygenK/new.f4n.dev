function runFix(/** @type string[] */ files) {
  const fileFlags = files.map((f) => `--file ${f} `);
  return `pnpm fix ${fileFlags.join(" ")}`;
}

module.exports = {
  "./**/*.ts?(x)": [
    runFix, "pnpm fix:prettier"
  ]
}
