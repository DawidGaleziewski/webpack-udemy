var webpack = require("webpack");
var path = require("path");

const VENDOR_LIBS = [
  // each string is the name of the library (npm modules);
  // taken from package.json dependencies section
  "faker",
  "lodash",
  "react",
  "react-dom",
  "react-input-range",
  "react-redux",
  "react-router",
  "redux",
  "redux-form",
  "redux-thunk"
];

module.exports = {
  // replace with object as we will have multiple files
  // multiple entrie points
  entry: {
    // !important: key is the name of output file
    bundle: "./src/index.js",
    // we define the vendor libraries used
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, "dist"),
    // change due to fact we no longer are putting all in one file
    // This is needed to name output files as keys
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/
      }
    ]
  },
  // Add plugins
  plugins: [
    // plugin that will get rid of the vendor code from bundle.js
    new webpack.optimize.CommonsChunkPlugin({
      // what files are duplicates between the two
      name: "vendor"
    })
  ]
};
