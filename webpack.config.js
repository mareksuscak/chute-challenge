var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  devtool: isDevelopment ? 'cheap-module-source-map' : '',
  cache: isDevelopment,
  debug: isDevelopment,
  entry: isDevelopment ? [
    'webpack-hot-middleware/client',
    './src/browser/main'
  ] : [
    './src/browser/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/dist/'
  },
  plugins: (function () {
    var plugins = [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(isDevelopment ? 'development' : 'production')
        }
      })
    ];

    if (isDevelopment) plugins.push(
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    );
    else plugins.push(
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false
        }
      })
    );

    return plugins;
  })(),
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
