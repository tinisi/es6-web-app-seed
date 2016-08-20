/* eslint-disable no-var, strict */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  inject: 'header',
  historyApiFallback: true,
  entry: 'app'
}).listen(5000, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:5000, Yo!');
  });