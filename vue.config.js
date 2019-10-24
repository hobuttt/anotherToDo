const path = require('path')

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': path.resolve('src')
        // '@common': path.resolve('src/common')
      }
    }
  }
}
