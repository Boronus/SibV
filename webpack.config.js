const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
/*var fontLocal = 'file-loader?name=[name].[ext]';
var fontBundle = 'file-loader?name=assets/fonts/[name].[ext]';
var fontConfig = isBundle ? fontBundle : fontLocal;*/

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
        rules: [{
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                //fallback: 'style-loader',
                //use: ['css-loader','less-loader','resolve-url-loader']
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            // If you are having trouble with urls not resolving add this setting.
                            // See https://github.com/webpack-contrib/css-loader#url
                            url: false,
                            //minimize: true,
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
                //use: ['css-loader', 'less-loader'],
                fallback: "style-loader"
                /*fallback: 'style-loader',
                use: ['css-loader', 'less-loader']*/
                /*use: [{
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"*/
            })
        },{
            //test: /\.(eot|ttf|woff|woff2)$/, loader: 'url-loader?limit=100000'//fontConfig
            //test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"
            //test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        },{
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=100000'//"file-loader"
            //test: /\.(ttf|eot|woff|woff2)$/,
        }],
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
        }/*,{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },{
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        },{
            //test: /\.(eot|ttf|woff|woff2)$/, loader: 'url-loader?limit=100000'//fontConfig
            //test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, //loader: "url-loader?limit=10000&mimetype=application/font-woff"
            //test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            use: 'url-loader',
            options: {
                // Limit at 50k. Above that it emits separate files
                limit: 50000,

                // url-loader sets mimetype if it's passed.
                // Without this it derives it from the file extension
                mimetype: "application/font-woff",

                // Output below fonts directory
                name: "./fonts/[name].[ext]"
            }
        },{
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, //loader: 'url-loader?limit=100000'//"file-loader"
            //test: /\.(ttf|eot|woff|woff2)$/,
            loader: 'url-loader',
            options: {
                name: "fonts/[name].[ext]"
            }
        },{
            test: /\.otf$/,
            loader: 'url-loader?limit=100000'
        },{
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader'
        },{
            test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
            loader: 'url-loader?limit=100000'
        }*/]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //extractLess
        new ExtractTextPlugin('main.css')
    ]
};