/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: {
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
    safelist: ['dark'],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}
