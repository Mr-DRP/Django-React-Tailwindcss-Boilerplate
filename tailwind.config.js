module.exports = {
  purge: {
    enabled: true,
    content: [
      './frontend/src/**/*.js',
      './frontend/src/**/*.jsx'
    ],
    options: {
      whitelist: []
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      django: '#092e20',
      react: '#61DBFB',
      tailwind: '#00b4b6'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
