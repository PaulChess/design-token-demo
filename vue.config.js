const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  configureWebpack: config=> {
    config.externals = [{
      vue: 'Vue'
    }]
  },
  devServer: {
    allowedHosts: ['sjq.10jqka.com.cn']
  }
})