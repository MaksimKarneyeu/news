const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',    
    devServer: {
        contentBase: './',
        compress: true,
        port: 9000
    }    
});