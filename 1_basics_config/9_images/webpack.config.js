const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//Fixing issues with paths
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        // Which file types to look for?
        test: /\.(jpe?g|png|gif|svg)$/,
        // !important order maters!
        use: [
          // add aditional settings to url-loader
          // when we pass options we put it into object
          {
            loader: 'url-loader',
            // look for 40000 bytes
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [new ExtractTextPlugin('style.css')]
};

module.exports = config;
