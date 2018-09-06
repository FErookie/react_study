var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js",
        publicPath: "/"
    },
    devServer: {
        inline: true,
        port: 3030
    },
    module: {rules: [{test: /\.js?$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader',},
                    {test : /\.css$/ , use: ['style-loader' , 'css-loader']},
                    {test : /\.ttf|woff|woff2|eot|svg$/ , use: 'url-loader'},
                    {test : /\.scss$/ , use : ['style-loader' , 'css-loader?modules&localIdentName=[path][name]-[local]' , 'sass-loader']}],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    resolve: {
        extensions: ['.js' , '.jsx' , '.json'],/*定义一下扩展名*/
        alias: {
            '@' : path.join(__dirname , './app')
        }
    }
}