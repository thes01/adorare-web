module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    // if unused, remove from package.json
    // 'postcss-object-fit-images': {} // polyfill for IE
  },
}
