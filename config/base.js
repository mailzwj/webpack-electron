const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('mini-css-extract-plugin');

const outputPath = path.resolve(__dirname, '../dist');

module.exports = {
    entry: {
        common: ['react', 'react-dom'],
        index: path.resolve(__dirname, '../app/pages/index.js'),
        login: path.resolve(__dirname, '../app/pages/login.js')
    },
    output: {
        path: outputPath,
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].bundle.js'
    },
    // target: 'electron-renderer',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react", "stage-0"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: ExtractTextPlugin.loader,
                        options: {
                            publicPath: outputPath + '/css'
                        }
                    },
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ]
            },
            {
                test: /\.(png|jpe?g|gif)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[name].[ext]',
                            publicPath: outputPath
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            title: 'Index',
            template: 'app/tpl.html',
            chunks: ['common', 'index'],
            chunksSortMode: 'manual',
            filename: 'index.html'
        }),
        new htmlPlugin({
            title: 'Login',
            template: 'app/tpl.html',
            chunks: ['common', 'login'],
            chunksSortMode: 'manual',
            filename: 'login.html'
        }),
        new ExtractTextPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        })
    ]
};
