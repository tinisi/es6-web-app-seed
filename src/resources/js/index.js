
// my library seems to be providing babel-polyfill
// that doesn't seem quite right
// need to publish a new version of the lib that does not
// require('babel-polyfill');

var uniqueNamespace = {};
uniqueNamespace.App = require('./app.js').default;
uniqueNamespace.app = new uniqueNamespace.App();

document.addEventListener('DOMContentLoaded', function() {
  uniqueNamespace.app.init();
});
