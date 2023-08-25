const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-hexrgba'),
  require('autoprefixer'),
];

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app'),
  },
  devServer: {
    hot: true,
    watchFiles: ['app/**/*.html'],
    static: {
      directory: path.join(__dirname, 'app'),
    },
    liveReload: false,
    port: 3001,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { url: false } },
          { loader: 'postcss-loader', options: { postcssOptions: { plugins: postCSSPlugins } } },
        ],
      },
    ],
  },
};
