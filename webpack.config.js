const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bungle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'source-map'
};
