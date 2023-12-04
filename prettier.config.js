module.exports = {
  trailingComma: "none",
  importOrderSeparation: true,
  importOrder: [
    "^react(?!-dom$)",
    "<THIRD_PARTY_MODULES>",
    "^@blocks/(.*)$",
    "^@layout/(.*)$",
    "^@elements/(.*)$",
    "^@_types/(.*)$",
    "^[./]"
  ],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ]
};
