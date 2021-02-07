// webpack.config.js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry:  path.join(__dirname, 'src/main.js'),
    mode:'develop',
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
        new VueLoaderPlugin()
    ],
}
