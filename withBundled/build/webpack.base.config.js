const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const tool = require('./tool');

function pathJoin(dir) {
  return path.join(__dirname, '..', dir)
}
function pathResolve(dir) {
  return path.resolve(__dirname, dir)
}
module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: config.build.staticRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.staticPublishPath
      : config.dev.staticPublishPath
  },
  resolve:{
    extensions: ['*', '.js','.jsx', '.json'],
    alias:{
      '@component':pathJoin('src/components'),
      '@tool':pathJoin('src/utilities'),
      '@static':pathJoin('static')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [pathJoin('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)?$/,
        loader: 'url-loader',//it's auto fallback file-loader
        options: {
          limit: 10000,
          name: tool.staticPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: tool.staticPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
