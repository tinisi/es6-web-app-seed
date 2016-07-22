
// since this is an app, it should be kosher to include this
require('babel-polyfill');

var uniqueNamespace = {};
uniqueNamespace.App = require('./app.js').default;
uniqueNamespace.app = new uniqueNamespace.App();

document.addEventListener('DOMContentLoaded', function() {
  uniqueNamespace.app.init();
});
