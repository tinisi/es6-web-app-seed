/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var isProduction = (process.env.NODE_ENV === 'production');

var webpackConfig = {
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    './src/resources/js/index'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
            hot: true,
            inject: 'false',
            hash: true,
            filename: 'index.html',
            template: 'src/index.ejs'
        })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        query: { mimetype: "image/png" },
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      },
    ]
  },
  htmlLoader: {
    ignoreCustomFragments: [/\{\{.*?}}/],
    attrs: ['img:src', 'link:href']
  },
  devServer: {
    inline: true,
    hot: true
  }
};

if ( isProduction ) {

  webpackConfig.entry = [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    './src/resources/js/index'
  ];

  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      include: /\.js$/,
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      }
    })
  );

};

module.exports = webpackConfig;