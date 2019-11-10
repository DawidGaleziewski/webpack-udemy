const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  // loaders are called modules (legacy reasons from webpack 1.0)
  module: {
    // Each loader will reside here
    rules: [
      // Single loader object
      {
        // Which loader will be used?
        use: 'babel-loader',
        // Which files the loader will apply to from the modules loaded?
        // Test uses regex
        test: /\.js$/
        //To tell babel what to do we need to create new file called .babelrc with rules on what to do
      }
    ]
  }
};

module.exports = config;
