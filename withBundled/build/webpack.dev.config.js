const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const tool = require('./tool');
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

//add hot-reload related code to entry chunks
Object.keys(baseConfig.entry).forEach(function (name) {
  baseConfig.entry[name] = ['./build/dev-client'].concat(baseConfig.entry[name])
});

const devConfig = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: config.dev.cssSourceMap,
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: config.dev.cssSourceMap,
              importLoaders: 1,
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: config.dev.cssSourceMap,
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: config.dev.cssSourceMap,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              importLoaders: 1,
              sourceMap: config.dev.cssSourceMap,
            }
          }, 'postcss-loader']
      },
    ],
  },
  //more on https://webpack.js.org/configuration/devtool/
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    //https://github.com/glenjamin/webpack-hot-middleware
    //new webpack.optimize.OccurenceOrderPlugin(), //webpack 1 only
    new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin(),//webpack 1 only
    new webpack.NoEmitOnErrorsPlugin(),
    //auto inject js css to index.html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new FriendlyErrorsPlugin()
  ]
});
module.exports = devConfig;
