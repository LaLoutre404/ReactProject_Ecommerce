/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-purple': '#AC8EAF',
        'dark-purple': '#562C5A',
      },

    },
  },
  plugins: [],
}
