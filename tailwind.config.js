/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      display: ['Merriweather', 'serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        'color1': '#76BA99',
        'color2': '#ADCF9F',
        'color3': '#CED89E',
        'color4': '#CED89E',
        'color5': '#FFDCAE',
        'color6': '#AEDBCE',
        'color7': '#D3EBCD',
      },
      espacio: {
        'mg-top': '6rem',
        'mg-dow': '6rem',
      },
      columns: {
        '4xs': '14rem',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
