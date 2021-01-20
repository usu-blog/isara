module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: '#da6b64',
        'primary-dark': '#d84940',
        'footer-gray': '#ececec',
      }),
      ringColor: (theme) => ({
        primary: '#da6b64',
      }),
    },
  },
  variants: {
    extend: {
      borderColor: ['focus'],
      opacity: ['hover'],
    },
  },
  plugins: [],
}
