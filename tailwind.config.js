/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        shop: { red: '#c62028', paper: '#f2f0ec', ink: '#171717' },
      },
      fontFamily: {
        sans: ['DM Sans', 'Arial', 'sans-serif'],
        display: ['Barlow Condensed', 'Arial Narrow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
