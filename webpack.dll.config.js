const webpack = require('webpack');
const utils = require('./webpack.utils');

const vendors = [
  'react',
  'react-dom',
  'react-router-dom'
];

module.exports = {
  mode: 'production',
  entry: {
    lib: vendors,
  },
  output: {
    path: utils.resolve(`./public`),
    filename: '[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: utils.resolve(`./public/manifest.json`),
      name: '[name]',
      context: __dirname
    })
  ]
}