var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // 1. adding modules
  module: {
    rules: [
      // 2. add rules
      {
        use: 'babel-loader',
        test: /\.js$/,
        // Do not try to apply babel to node modules
        // Reason: this wastes time scanning those files. And those are in es5
        exclude: /node_modules/
        // 3 add .babelrc
      },
      //4 add loader for css
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  }
};
