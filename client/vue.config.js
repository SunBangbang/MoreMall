module.exprots = {
  devserver: {
    // host: "http://127.0.0.1", // 本地地址
    // port: 8080, // 端门号
    open: true, // 配置项目在启动时自动在浏览器打开
    proxy: {
      "/api": {
        //api是代理标识，一般是每个接口前的相同部分
        target: "http://127.0.0.1:3000", // 请求地址，一般是服务器地址
        changeOrigin: true, // 是否进行跨域
        pathRewrite: {
          // pathRewrite的作用是把请求接口中的'/api'替换，一般是换为空''
          "^/api": ""
        }
      }
    }
  }
};
