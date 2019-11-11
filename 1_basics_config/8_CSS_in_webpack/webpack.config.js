const path = require('path');

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
      //rule for css
      {
        // We can add loaders in array
        //!important index of those matters!
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  }
};

module.exports = config;
