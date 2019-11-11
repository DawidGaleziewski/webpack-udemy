// Webpack runs with node so we can import this helper
const path = require('path');

const config = {
  /**
   * File that starts the project is called entry
   * Traditionally we call this file index.js
   * Entry usually do not export anything more to other files, it is highest on the dependencies tree
   *
   * Entry file will form the building process of the output bundle
   *
   * The path provided is relative to root of the project
   * */
  entry: './src/index.js',

  /**
   * Output: where save the output and how to name it
   */
  output: {
    //! it requires absolute file referance
    // As this is extremly stuipd we will need a node.js helper for the path FFS!
    //By convention we want to save webpack to 'build' folder
    path: path.resolve(__dirname, 'build'),
    // By convention called bundle.js
    filename: 'bundle.js'
  }
};

// We need to export the config for webpack
module.exports = config;
