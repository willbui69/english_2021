const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/client/index.js',
        topup: './src/client/topup.js',
        test: './src/client/test.js'
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
        template: "./src/client/views/index.html",
        filename: "./index.html",
        inject: true,
        chunks: ['index']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/donate.html",
        filename: "./donate.html",
        inject: true,
        chunks: ['index']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/mentorship_program.html",
        filename: "./mentorship_program.html",
        inject: true,
        chunks: ['index']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_0.html",
        filename: "./week_0.html",
        inject: true,
        chunks:  ['index']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_0_required_reading.html",
        filename: "./week_0_required_reading.html",
        inject: true,
        chunks:  ['index']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_1.html",
        filename: "./week_1.html",
        inject: true,
        chunks:  ['index']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_2.html",
        filename: "./week_2.html",
        inject: true,
        chunks:  ['index']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/test.html",
        filename: "./test.html",
        inject: true,
        chunks:  ['index', 'test']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_3.html",
        filename: "./week_3.html",
        inject: true,
        chunks: ['index']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_4.html",
        filename: "./week_4.html",
        inject: true,
        chunks: ['index']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_6.html",
        filename: "./week_6.html",
        inject: true,
        chunks: ['index']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_0_notes.html",
        filename: "./week_0_notes.html",
        inject: true,
        chunks: ['index','topup']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_0_lesson_1.html",
        filename: "./week_0_lesson_1.html",
        inject: true,
        chunks: ['index']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_0_lesson_2.html",
        filename: "./week_0_lesson_2.html",
        inject: true,
        chunks: ['index']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_1_lesson_1.html",
        filename: "./week_1_lesson_1.html",
        inject: true,
        chunks: ['index']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/week_1_lesson_2.html",
        filename: "./week_1_lesson_2.html",
        inject: true,
        chunks: ['index']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/teach.html",
        filename: "./teach.html",
        inject: true,
        chunks: ['index', 'test']
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/notfound.html",
        filename: "./notfound.html",
        inject: true,
        chunks: ['index']
    })
]
}