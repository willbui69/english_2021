const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/client/index.js',
        startpage: './src/client/startpage.js',
        topup: './src/client/topup.js'
    },
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                },
                {
                    test: /\.scss$/,
                    use: [ 'style-loader', 'css-loader', 'sass-loader' ]
                },
                {
                    test: /\.(png|ttf)$/,
                    loader: "file-loader",
                    options: {
                        name: '/media/[name].[ext]'
                    },
                  },
        ]
},
plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.ejs",
        filename: "./index.html",
        inject: true,
        chunks: ['index']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_0.ejs",
        filename: "./week_0.html",
        inject: true,
        chunks:  ['startpage']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_3.ejs",
        filename: "./week_3.html",
        inject: true,
        chunks: ['startpage']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/startpage.ejs",
        filename: "./startpage.html",
        inject: true,
        chunks: ['startpage']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_0_notes.ejs",
        filename: "./week_0_notes.html",
        inject: true,
        chunks: ['startpage','topup']
    })
]
}