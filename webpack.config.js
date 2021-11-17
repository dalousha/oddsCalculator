const path = require('path');

const PUBLIC_DIST = path.resolve(__dirname, 'client/public')
const SRC_DIST = path.resolve(__dirname, 'client/src')

module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIST
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
      ]}
    ]
  }
}