/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFECEC',
        'secondary': '#A367B1',
        'regular-purple': '#5D3587',
        'dark-purple': '#392467',
        'highlight': '#BF8FC3'
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      }
    },
  },
  plugins: [],
}