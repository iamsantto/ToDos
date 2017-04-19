const config = {
  isProduction: process.env.NODE_ENV === 'production',

  src: {
    js: ['./*.js', './client/**/*.js', './server/**/*.js', './tasks/**/*.js'],
    main: 'Root.js',
    mainStyle: 'assets/stylesheets/main.scss'
  },

  dest: './build'
}

module.exports = config
