module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {}  
  },
  plugins: [require('@tailwindcss/forms'),

    require('@themesberg/flowbite/plugin'),
    require('tailwindcss-flexbox-order')(),
],
}