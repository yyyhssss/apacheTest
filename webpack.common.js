const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: "./src/main.js",
        another: "./src/another.js"
    },
    // output: {
    //     path: path.join(__dirname, 'dist'),
    //     filename: this.mode === 'production' ? '[name].[chunkhash].bundle.js' : ' '
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(jpg|jpeg|png|tif|gif)$/, use: ['url-loader?limit=8192'] },
            { test: /\.(woff|woff2|ttf|eot|otf)$/, use: ['file-loader'] },
        ]
    },
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        },
    },
}