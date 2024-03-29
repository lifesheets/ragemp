const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  outputDir: "../.././client_packages/cef",

  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 22008,
    https: false,
    hot: false
  },

  publicPath: './',

  pluginOptions: {
    vueI18n: {
      locale: 'ru',
      fallbackLocale: 'en',
      localeDir: 'locales',
      fullInstall: true
    }
  },

  configureWebpack: {
    devServer: {
      historyApiFallback: true
    }
  }
})
