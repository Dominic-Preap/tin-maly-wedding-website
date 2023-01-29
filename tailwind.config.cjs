const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        // sm: '640px',
        // md: '768px',
        // lg: '1024px',
      },
    },

    extend: {
      colors: {
        primary: {
          50: '#f3f7fc',
          100: '#e7f0f7',
          200: '#c9deee',
          300: '#9ac3df',
          400: '#63a3cd',
          500: '#3f87b8',
          600: '#2e6c9b',
          700: '#27577d',
          800: '#234a69',
          900: '#1d364b',
        },
      },
      fontFamily: {
        sans: ['Lora', 'Koh Santepheap', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', 'Angkor', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
