const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: __dirname+ '/dist/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    context: __dirname + '/src',    

    devServer: {
        contentBase: __dirname + '/dist',
        hot: true
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ExtractTextPlugin.extract({

                use: [
                    {
                        loader: 'css-loader',
                        options: {

                            url: false,
                            minimize: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
                fallback: "style-loader"
            })
        },{
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },{
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=100000'
        }],
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new ExtractTextPlugin('main.css')
    ]
};