/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#EEF2FF',
          100: '#D9E2FF',
          200: '#B3C5FF',
          300: '#8DA7FF',
          400: '#6685FF',
          500: '#4162FF',
          600: '#2F4DD6',
          700: '#1F39AD',
          800: '#0F2684',
          900: '#0A2463',
          950: '#051542',
        },
        orange: {
          50: '#FFF3E6',
          100: '#FFE7CC',
          200: '#FFCF99',
          300: '#FFB766',
          400: '#FFA033',
          500: '#FF8C00',
          600: '#FF7D00',
          700: '#D66A00',
          800: '#AD5600',
          900: '#844200',
          950: '#5B2D00',
        },
      },
    },
  },
  plugins: [],
}
