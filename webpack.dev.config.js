const webpackMerge = require('webpack-merge');
const utils = require('./webpack.utils');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = webpackMerge.merge(baseWebpackConfig, {
  mode: 'development',
  plugins: [],
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    contentBase: utils.resolve(`./public/`),
    compress: true,
    port: 8080,
    publicPath: '/',
    https: false,
    hotOnly: false,
  }
});