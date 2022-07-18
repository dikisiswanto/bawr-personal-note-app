/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0284c7',
      },
      width: {
        sidebar: '38%',
        content: '62%',
      },
    },
    fontFamily: {
      main: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
