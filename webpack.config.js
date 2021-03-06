const webpack = require('webpack');
const path = require('path');
//seperate css file
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    context: path.resolve(__dirname, './src'),
    entry: {
        main: './main.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.ts'],
        // alias: {
        //     client: path.resolve(__dirname, "src/client"),
        //     view: path.resolve(__dirname, "src/views"),
        //     api: path.resolve(__dirname, "src/api"),
        //     utils: path.resolve(__dirname, "src/utils"),
        //     class: path.resolve(__dirname, "src/class"),
        //     interface: path.resolve(__dirname, "src/interfaces")
        // }
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
    },
    module: {
        loaders: [
            {
               test: /\.tsx?$/,
               loader: 'awesome-typescript-loader'
            },
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
                exclude: /node_modules/,
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
