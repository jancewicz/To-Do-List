const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry: './src/index.ts',

    output: {

        filename: 'bundle.js',

        path: path.resolve(__dirname, 'dist'),

    },

    plugins: [new HtmlWebpackPlugin()],

    module: {

        rules: [

            {

                test: /\.tsx?$/,

                use: 'ts-loader',

                exclude: /node_modules/,

            },

            {
                test: /\.css$/i,

                use: ['style-loader', 'css-loader'],

            },

        ],

    },

    resolve: {

        extensions: ['.tsx', '.ts', '.js'],

    },

    devtool: 'source-map',

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        // other dev server options...
    },

};