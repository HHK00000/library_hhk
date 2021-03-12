module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 32,
            minPixelValue: 2,
            propList: ['*'],
        }
    }
}