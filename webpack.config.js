module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  optimization: {
    minimize: false,
    sideEffects: false,
  }
}
