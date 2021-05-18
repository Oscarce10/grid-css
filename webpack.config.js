const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader'],
            },
        ],
    },
};