module.exports = {
    publicPath: '/',
    devServer: {
        // host: '0.0.0.0',
        // port: 8081,
        // https: false,
        // hotOnly: false,
        disableHostCheck: true, //取消检查hostname
        proxy: {
            '/api': {
                target: 'http://106.14.222.120/example/interface',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}