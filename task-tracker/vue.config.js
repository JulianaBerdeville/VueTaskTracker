module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5432',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' }
      }
    }
  }
}