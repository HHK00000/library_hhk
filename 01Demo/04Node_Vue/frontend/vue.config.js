// vue.config.js
module.exports = {
  productionSourceMap: false,
    css: {
      requireModuleExtension: true,
      loaderOptions: {
        css: {
            modules: {
                modules: true
            }
        } 
      }
    },
    devServer: {
      open: true,
      host: "localhost",
      disableHostCheck: true,
      port: 8080,
      proxy: {
        "/api": {
          target: "http://127.0.0.1:9000/", //前端设置 proxy 跨域
          changeOrigin: true,
          pathRewrite: {
            "^/api": "/"
          },
        },
      },
    },
    lintOnSave: false
  }