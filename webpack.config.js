var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.woff(2)?(\?[0-9]+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?[0-9]+)?$/, loader: 'file-loader' },
      { test: /\.(gif|jpg|png)$/, loader: 'url-loader?limit=10000' },
      { test: /\.js$/, loader: 'babel-loader?cacheDirectory=true', exclude: /node_modules/, include: __dirname },
      {
        test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
        loader: 'imports?define=>false&this=>window'
      },
      { test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['src', 'node_modules']
  },
  postcss: function () {
    return [autoprefixer({browsers: 'last 2 version'})];
  }
}
