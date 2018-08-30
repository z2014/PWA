import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import baseConfig from './base.config';
import webpackBaseConfig from './webpack.base.config';


const webpackDevConfig = merge(webpackBaseConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        publicPath: '',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.js.map',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: baseConfig.dir.src + '/index.html',
            inject: true,
            chunks: ['vendor', 'main']
        }),
        new FriendlyErrorsPlugin()
    ],
    devServer: {
        host: baseConfig.dev.host,
        port: baseConfig.dev.port,
        historyApiFallback: true
    }
})
export default webpackDevConfig;
