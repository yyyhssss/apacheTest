const { default: merge } = require("webpack-merge");
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].bundle.js'
    },
})