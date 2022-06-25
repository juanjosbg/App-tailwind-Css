/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      display: ['Merriweather', 'serif'],
      body: ['Graphik', 'sans-serif'],
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
    extend: {
      colors: {
        'color1': '#5F7161',
        'color2': '#6D8B74',
        'color3': '#EFEAD8',
        'color4': '#D0C9C0',
        'color5': '#E0D8B0',
        'color6': '#F8ECD1',
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
  },
  plugins: [],
}
