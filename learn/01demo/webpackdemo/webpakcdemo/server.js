const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const compiler = webpack(config);

const server = new webpackDevServer(compiler,{});

server.listen(8080,'localhost',()=>{
    console.log('dev server listen on port 8080')
})