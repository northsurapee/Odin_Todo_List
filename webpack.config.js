const path = require('path');

module.exports = {
  // development(readable) -> production(unreadable but fast!) when build project for deployment 
  // see 'webpack-merge' to use it instead of manually switching
  mode: 'development', 
  entry: './src/index.js',
  // devtool for error handling
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};