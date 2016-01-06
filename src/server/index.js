var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var yargs = require('yargs');

var args = yargs
  .alias('p', 'production')
  .argv;

var app = new express();
var port = 8000;

process.env.NODE_ENV = args.production ? 'production' : 'development';
console.log('NODE_ENV => ', process.env.NODE_ENV);

// In development mode serve the scripts using webpack-dev-middleware
if (process.env.NODE_ENV === 'development') {
  var config = require('../../webpack.config');
  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use('/dist', express.static('dist', {maxAge: '200d'}));
}

app.use('/assets', express.static('assets', {maxAge: '200d'}));

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
})
