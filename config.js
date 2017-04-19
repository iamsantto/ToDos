const config = {
  src: {
    js: ['./*.js', './server/**/*.js', './client/**/*.js'],
    gulp: './tasks/**/*.js',
    main: 'Root.js',
    mainStyle: 'assets/stylesheets/main.scss'
  },

  dest: './build'
}

module.exports = config
