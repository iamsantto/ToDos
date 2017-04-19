const config = {
  src: {
    js: ['./*.js', './server/**/*.js', './client/**/*.js', './tasks/**/*.js'],
    main: 'Root.js',
    mainStyle: 'assets/stylesheets/main.scss'
  },

  dest: './build'
}

module.exports = config
