/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#FF5722',
        accent: '#2196F3',
        background: '#F5F5F5',
        text: '#212121',
      },
    },
  },
  plugins: [],
}