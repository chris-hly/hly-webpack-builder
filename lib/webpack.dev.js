const merge = require('webpack-merge');
const webpack = require('webpack');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
    index: 'expense.html',
  },
  devtool: 'inline-source-map',
};

module.exports = new SpeedMeasurePlugin().wrap(merge(baseConfig, devConfig));
