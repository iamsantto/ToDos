const autoprefixer = require('autoprefixer')
const path = require('path')
const precss = require('precss')
const webpack = require('webpack')

const config = require('./config')

module.exports = {
  context: path.join(__dirname, 'client'),
  devtool: process.env.NODE_ENV === 'production' ? 'cheap-module-source-map' : 'eval',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './' + config.src.main,
      './' + config.src.mainStyle
    ]
  },
  output: {
    path: path.join(__dirname, config.dest),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer(),
        precss()
      ]
     }
  })
  ],
  resolve: {
    alias: {
      'redux': path.join(__dirname, 'node_modules/redux')
    },
    extensions: ['*', '.js', '.json', '.node'],
    modules: [
      path.join(__dirname, 'node_modules'),
      'node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, 'node_modules'),
      'node_modules'
    ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules\/(?!kandy-redux)/
    }, {
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: __dirname
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      use: 'file?name=[path][name].[ext]'
    }, {
      test: /\.json$/,
      use: 'json-loader'
    }, {
      test: /\.node$/,
      use: 'node-loader'
    }, {
        test: /\.(eot|svg|ttf|woff|woff2|jpg|png)$/,
        use: 'file-loader?name=fonts/font-[hash:6].[ext]'
    }],
    noParse: /node_modules\/json-schema\/lib\/validate\.js/
  }
}
