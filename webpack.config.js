module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  optimization: {
    minimize: false,
    chunkIds: "named",
    moduleIds: "deterministic",
    concatenateModules: true,
    sideEffects: false,
    splitChunks: {
      name: false,
      minChunks: 1,
      cacheGroups: {
        libs: {
          priority: 1,
          name: "libs",
          test: /package-a/,
        }
      }

    }
  }
}
