const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        /**
         * loader is same as use hower use wont work with extract plugin.
         *
         * plugins differ from loaders in webpack
         * plugins work outside of webpack pipeline
         *  */

        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      }
    ]
  },
  /**We need to add any plugins to webpack property for it to work
   *
   *  */

  plugins: [new ExtractTextPlugin('style.css')]
};

module.exports = config;
