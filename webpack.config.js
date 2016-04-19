/*eslint-env node */
module.exports = Object.assign({
  entry: './src',
  output: {
    library: 'DateParse',
    libraryTarget: 'umd',
    filename: 'vue-dateparse.js',
    path: './dist',
  },
  externals: {
    'vue': 'Vue',
  },
}, require('./webpack.base'));
