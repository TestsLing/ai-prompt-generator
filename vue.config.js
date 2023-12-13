const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: '127.0.0.1',
    proxy: {
      '/sdapi': {
        target: 'http://43.136.21.248:7862',
        changeOrigin: true
      },
    }
  },
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = '极客飞兔AI标签提词器'
      return args
    })
  },
})
