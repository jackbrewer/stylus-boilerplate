var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'scripts');
var mainPath = [
  path.resolve(nodeModulesPath, 'stylus-mixins', 'index.styl'),
  path.resolve(__dirname, 'stylus', 'index.styl')
  ] 
var config = {
  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'eval',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'main.js',
    publicPath: '/scripts/'
  },
  module: {
    loaders: [

      // I highly recommend using the babel-loader as it gives you ES6/7 syntax and JSX transpiling out of the box
      // if you want to use React for example.
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [nodeModulesPath]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!stylus-loader')
      }      
    ]
  },
  postcss: function () {
    return [ autoprefixer({ browsers: ['last 4 versions'] }) ];
  },
  plugins: [
    new ExtractTextPlugin("../styles/[name].css")
  ]
};

module.exports = config;