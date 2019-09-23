
const path = require('path');
const glob = require('glob');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const projectRoot = process.cwd();

const setMap = () => {
  const entry = {};
  const htmlWebpackPlugins = [];
  const entryFiles = glob.sync(path.join(projectRoot, './src/*/index.js'));
  Object.keys(entryFiles)
    .map((key) => {
      const entryFile = entryFiles[key];
      const match = entryFile.match(/src\/(.*)\/index\.js/);
      const pageName = match && match[1];
      entry[pageName] = entryFile;
      htmlWebpackPlugins.push(new HtmlWebpackPlugin({
        template: path.join(projectRoot, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName, 'commons'],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false,
        },
      }));
      return key;
    });

  return {
    entry,
    htmlWebpackPlugins,
  };
};

const { entry, htmlWebpackPlugins } = setMap();

console.log(entry);

module.exports = {
  mode: 'production',
  entry,
  output: {
    filename: '[name].js',
    path: path.join(projectRoot, 'dist'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader'],
      },
      {
        test: /.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => autoprefixer,
            },
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,
              remPrecision: 8,
            },
          },
        ],
      },
      {
        test: /.(jpg|png|jpeg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: '[name]_[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /.(ttf|otf|eot|woff2|woff)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8].[ext]',
          },
        },
      },
    ],
  },
  stats: 'errors-only',
  plugins: [
    new MiniCssExtractPlugin({ // css hash
      filename: '[name]_[contenthash:8].css',
    }),
    new FriendlyErrorsWebpackPlugin(),
    new CleanWebpackPlugin(),
    function errorPlugin() {
      this.hooks.done.tap('done', (stats) => {
        if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') === -1) {
          console.log('build error'); /*eslint-disable-line*/
          process.exit(1);
        }
      });
    },
    // new HtmlWebpackExternalsPlugin({ // 提取公共文件 文件一般放cdn
    //     externals: [
    //         {
    //             module: 'react',
    //             entry: 'https://11.url.cn/now/lib/16.2.0/react.min.js',
    //             global: 'React',
    //         },
    //         {
    //             module: 'react-dom',
    //             entry: 'https://11.url.cn/now/lib/16.2.0/react-dom.min.js',
    //             global: 'ReactDOM',
    //         },
    //     ],
    // }),
  ].concat(htmlWebpackPlugins),
};
