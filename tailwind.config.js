/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'backgroundColor': '#030303',
      'whiteText': '#ffffff',
      'subtitlesText': '#F8F8F8',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
      Bebas: ['Bebas Neue', 'serif'],
    },
  },
  plugins: [],
}

