const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  //axios域代理，解决axios跨域问题
  // baseUrl: '/',
  // devServer: {
  // 	proxy: {
  // 		'': {
  // 			target: 'http://192.168.0.108:8090',
  // 			changeOrigin: true,
  // 			ws: true,
  // 			pathRewrite: {

  // 			}
  // 		}
  // 	}
  // }
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }

}