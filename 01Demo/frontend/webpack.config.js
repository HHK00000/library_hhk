// webpack.config.js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    entry:  path.join(__dirname, 'src/main.js'),
    mode: 'develop',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin()
    ],
    devServer: {
        historyApiFallback: {
          index: `/dist/index.html`
        },
        host: '0.0.0.0',
        port: '8014',
        disableHostCheck: true
    }
}
