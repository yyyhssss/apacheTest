const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: "./src/main.js",
        // another: "./src/another.js",
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
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.(jpg|jpeg|png|tif|gif)$/, use: ['url-loader?limit=8192'] },
            { test: /\.(woff|woff2|ttf|eot|otf|svg)$/, use: ['file-loader'] },
            { test: /\.vue$/, use: ['vue-loader'] },
            // { test: /\.js$/,exclude: /(node_modules|bower_components)/,use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } }
            { test: /\.js$/,exclude: /(node_modules|bower_components)/,use: ['babel-loader'] }
        ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.js',
          'vue-router$': 'vue-router/dist/vue-router.js'
        }
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
