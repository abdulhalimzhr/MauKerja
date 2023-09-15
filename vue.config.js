const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/jobs': {
        target: 'http://feapi.ajt.my/jobs', // I did this because i got CORS error
        changeOrigin: true,
        pathRewrite: { '^/jobs': '' }
      }
    }
  }
});
