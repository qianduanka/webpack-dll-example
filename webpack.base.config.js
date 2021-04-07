const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const utils = require('./webpack.utils.js');

module.exports = {
  mode: 'development',
  entry: {
    app: utils.resolve(`./src/app.js`),
  },
  output: {
    path: utils.resolve('./dist'),
    filename: 'js/[name].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      include: utils.resolve('./src'),
      exclude: /node_modules/,
    }]
  },
  plugins: [
    new CleanWebpackPlugin({

    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: utils.resolve(`./public`),
        globOptions: {
          ignore: ['**/*.html', '**/*.ejs']
        }
      }]
    }),
    new HtmlWebpackPlugin({
      filename: utils.resolve('./dist/index.html'),
      template: utils.resolve(`./public/index.ejs`),
      inject: true,
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      chunks: ['app'],
      options: {
        manifest: utils.resolve('./mainfest.json')
      }
    })
  ]
}

