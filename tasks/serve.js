const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const gutil = require('gulp-util')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const routes = require('../server/routes')
const webpackConfig = require('../webpack.config')

module.exports = () => {
  const app = express()
  const httpServer = http.Server(app)
  const compiler = webpack(webpackConfig)
  const db = mongoose.connection

  mongoose.connect(process.env.DATABASE_URL)

  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    console.log('Connected to Database.')
  })

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }))

  app.use(webpackHotMiddleware(compiler))
  app.use(cors())

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.use('/api', routes.router)
  app.use('/api', routes.protectedRouter)

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
  })

  httpServer.listen(process.env.PORT, function(err) {
    if (err)
      throw new gutil.PluginError('webpack-dev-server', err)

      gutil.log('[webpack-dev-server]', 'http://localhost:' + process.env.PORT + '/webpack-dev-server/index.html')
  })
}
