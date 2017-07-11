module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader", query: { presets: ['es2015', 'react'] }}
    ]
  },
  devtool: 'source-map',
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
}