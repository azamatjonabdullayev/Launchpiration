/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // корневые html
    "./**/*.html", // все вложенные html
    "./src/**/*.{js,ts}", // если есть скрипты
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
