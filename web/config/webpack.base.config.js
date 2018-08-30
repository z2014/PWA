import path from 'path';

const webpackBaseConfig = {
    entry: {
        main: path.join(__dirname, '../src/index'),
        vendor: ['react', 'react-dom']
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.json',
            '.less',
            '.ts',
            '.tsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                    plugins: [
                        '@babel/plugin-transform-runtime',
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-proposal-function-bind'
                    ]
                }
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
};

export default webpackBaseConfig;
