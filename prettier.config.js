/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  semi: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  tailwindConfig: './tailwind.config.js',
  plugins: [require('prettier-plugin-tailwindcss')],
};
