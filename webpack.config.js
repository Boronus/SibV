const webpack = require('webpack');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

/*const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});*/

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        path: __dirname+ '/dist/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    context: __dirname + '/src',    
    /*resolve: {
        extensions: ['', '.js','.less']
    },*/
    /*resolve: {
        modulesDirectories: ['node_modules']
    },*/
    devServer: {
        contentBase: __dirname + '/dist',
        hot: true
    },
    module: {
        /*rules: [{
            test: /\.less$/,
            use: extractLess.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }],
                // use style-loader in development
                //fallback: "style-loader"
            })
        }],*/
        loaders: [/*{
            test: /\.less?$/,
            use: [{
                loader: "style-loader" 
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader", options: {
                    sourceMap: true
                }
            }]    
        }, */{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },{
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        },{
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },{
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
        },{
            test: /\.otf$/,
            loader: 'url-loader?limit=100000'
        },{
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader'
        }
            /*,{
            test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
            loader: 'url-loader?limit=100000'
        }*/]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};