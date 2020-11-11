
module.exports = {
   publicPath: './',
    configureWebpack: {
      devtool: 'source-map',
    },
    devServer: {
      proxy: {
           //名字可以自定义，这里我用的是api
           '/api': {
            target: 'https://my.3dmgame.com',//设置你调用的接口域名和端口号 别忘了加http
            changeOrigin: true,//这里设置是否跨域
            // pathRewrite:{
            //   '^/api':''
            // }
          },
          '/proc': {
            target: 'https://my.3dmgame.com',//设置你调用的接口域名和端口号 别忘了加http
            changeOrigin: true,//这里设置是否跨域
            // pathRewrite:{
            //   '^/api':''
            // }
          }
      }
  }
}
 