module.exports = {
  publicPath: '/unium-landing/',
  devServer: {
    proxy: {
      '/': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
