const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    require('autoprefixer'),
    tailwindcss('./tailwind.config.js')
  ],
};