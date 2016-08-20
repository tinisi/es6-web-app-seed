/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var cssnext = require('postcss-cssnext');
var CleanWebpackPlugin = require('clean-webpack-plugin');
// TODO: figure this out (can't tell if it is working)
var cssnano = require('cssnano');

var isProduction = (process.env.NODE_ENV === 'production');

var webpackConfig = {
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    './src/resources/js/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app-[hash].js',
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
        inline: true,
        hot: true,
        inject: 'header',
        // hash: true, // not needed when file name has [hash]
        filename: 'index.html',
        template: 'src/index.ejs',
        outputPath: path.join(__dirname, 'dist')
    }),
    new CleanWebpackPlugin([__dirname + '/dist'], {
      root: process.cwd()
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
        loader: 'url?limit=10000&name=resources/img/[name].[hash].[ext]',
        include: path.join(__dirname, 'src/resources/img')
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        include: path.join(__dirname, 'src')
      },
      {
        test:   /\.css$/,
        loaders: ['style-loader','css-loader','postcss-loader'],
        include: path.join(__dirname, 'src/resources/styles')
      }
    ]
  },
  postcss: function () {
    return [cssnext];
  }
};

if ( isProduction ) {

  // add the compression in prod mode only
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

  // TODO: figure this out (can't tell if it is working)
  // webpackConfig.postcss = function () {
  //   return [cssnano];
  // }

};

module.exports = webpackConfig;