// let path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// console.log(__dirname,__filename,888)
module.exports = {
    /* webpack 编译模式 */
    mode: 'development',
    // mode: 'production',
    /* webpack 打包 入口文件 */
    entry: './main.js',
    /* webpack 打包 出口文件 */
    output: {
        filename: './index[hash:10].js'
    },
    /* webpack-plugins 配置 */
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '小demo',
            template: './index.html',
            minify: true,
            filename: 'index.html'
        })
    ],
    
    /* webpack-dev-server  开启热更新 */
    devServer: {
        contentBase: './static',
        port: 8080,
        open: true,
        hot: true,
        compress: true
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader','css-loader'
            ],
        }],
    }
    
}