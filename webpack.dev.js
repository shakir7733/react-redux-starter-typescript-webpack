const webpack = require("webpack");
const { merge } = require('webpack-merge');
const common = require("./webpack.config.js");
var path = require("path");


module.exports = merge(common, {
    module:{
        rules:[
            {
                // Now we apply rule for images
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: '/images'
                        }
                    }
                ]
            },
        ]
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'src'),
        // compress: true,
        overlay: true,
        open: 'Google Chrome',
        port: 4000,
        open: true,
        // proxy: {
        //     '/': {
        //         target:'http://try.localhost:8000' ,
        //         pathRewrite: {'^/' : ''}
        //     },
        // },
        // public: 'http://localhost:4000',
        disableHostCheck: true,
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        // }
    },
})