const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.config');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const devConfig = {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        stats: 'errors-only',
        index: 'expense.html',
    },
    devtool: 'inline-source-map',
}

module.exports = new SpeedMeasurePlugin().wrap(merge(baseConfig, devConfig));