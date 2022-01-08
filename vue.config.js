/**
 * vue.config.js
 * https://cli.vuejs.org/zh/config/
 */

const vueConfig = {
  css: {
    extract: false,
    loaderOptions: {
      less: {
        modifyVars: {
        },
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {}
}

module.exports = vueConfig
