const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'development'

module.exports = {
    mode:isDevelopment ? 'development': 'production',
    devtool: isDevelopment ? 'eval-source-map': 'source-map',
    entry:path.resolve(__dirname, 'src', 'index.jsx'),
    output:{
        path:path.join(__dirname, 'dist'),
        filename:'bundle.js',
    },
    resolve:{
        extensions:[ '.js', '.jsx']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            watch: true,
          },
          
        // contentBase: path.resolve(__dirname, 'public'),
    },
    plugins:[
        new htmlWebpackPlugin ({
            template: path.join(__dirname,'public', 'index.html'),
        })
    ],
    module:{
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use:'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use:['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    }
}