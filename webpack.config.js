const webpack = require('webpack');
const path = require('path');

//seperate styles files in PROD only
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     disable: process.env.NODE_ENV === "development"
// });

const config = {
    context: path.resolve(__dirname, './src'),
    entry: {
        index: './index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],
    watch: true
};


module.exports = config;
