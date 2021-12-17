const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/client/index.js'
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
                        outputPath: 'images',
                        name: '[name].[ext]'
                    },
                }
        ]
},
plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_0.html",
        filename: "./week_0.html"
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_3.html",
        filename: "./week_3.html"
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_0_notes.html",
        filename: "./week_0_notes.html"
    })
]
}