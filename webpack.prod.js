const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { default: merge } = require("webpack-merge");
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        }),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename:  '[name].[chunkhash].bundle.js'
    },
})