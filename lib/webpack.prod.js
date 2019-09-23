const merge = require('webpack-merge');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const OptimizeCssAssetesWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.base');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name]_[chunkhash:8].js',
  },
  plugins: [
    new OptimizeCssAssetesWebpackPlugin({ // css压缩
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
  ],
  optimization: { // 利用 SplitChunksPlugin 分离⻚面公共文件
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          chunks: 'all',
          name: 'commons',
          minChunks: 2,
        },
      },
    },
  },

};

module.exports = merge(baseConfig, prodConfig);
