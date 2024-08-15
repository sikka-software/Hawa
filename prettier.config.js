/** @type {import("prettier").Config} */

module.exports = {
  printWidth: 100,
  trailingComma: "all",
  importOrderSeparation: true,
  importOrder: [
    "^react(?!-dom$)",
    "<THIRD_PARTY_MODULES>",
    "^@blocks/(.*)$",
    "^@layout/(.*)$",
    "^@elements/(.*)$",
    "^@_types/(.*)$",
    "^@sikka/(.*)$",
    "^[./]",
  ],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
