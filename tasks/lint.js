const eslint = require('gulp-eslint')
const gulp = require('gulp')
const gulpIf = require('gulp-if')
const notifier = require('node-notifier')

const config = require('../config')

// Remember the last linting state so that we can pop-up when the linting succeeds again.
let lintErrors = false

module.exports = () => {
  return gulp.src(config.src.js)
  .pipe(eslint())
  .pipe(eslint.format('stylish'))
  .pipe(eslint.format(files => {
    const hasErrors = file => { file.messages.length }

    if (files.some(hasErrors)) {
      lintErrors = true

      notifier.notify({
        title: 'ESLint Errors',
        message: 'Errors were detected by ESLint.',
        sound: 'Frog'
      })
    } else if (lintErrors) {
      lintErrors = false

      notifier.notify({
        title: 'ESLint Success',
        message: 'Everything looks good.'
      })
    }
  }))
  .pipe(gulpIf(config.isProduction, eslint.failAfterError()))
}
