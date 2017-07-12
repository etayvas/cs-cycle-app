const webpack = require('webpack');
const path = require('path');

const config = {
    context: path.resolve(__dirname, './src'),
    entry: {
        index: './index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/assets',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
    },
};


module.exports = config;
