module.exports = {
  publicPath: '/unium-landing/',
  devServer: {
    proxy: {
      '^/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
