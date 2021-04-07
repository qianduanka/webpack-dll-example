const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.config');
const utils = require('./webpack.utils');

module.exports = webpackMerge.merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [],
});