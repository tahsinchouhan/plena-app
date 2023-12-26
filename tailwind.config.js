/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2A4BA0',
        secondary: '#1E222B',
        tertiary: '#616A7D',
        accent: '#ffc800',
      },
    },
  },
  plugins: [],
};
