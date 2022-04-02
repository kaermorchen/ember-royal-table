module.exports = {
  content: ['./tests/dummy/app/**/*.html', './tests/dummy/app/**/*.hbs'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: '#FAFAFA',
        gray: '#EEEDEF',
        dark: '#55585D',
        text: '#33373B',
        // secondary: '#EEEDEF',
        // primary: '#2563EB',
      },
    },
  },
  variants: {
    extend: {},
  },
  safelist: [],
  plugins: [],
};
