//webpack 只能能处理js文件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlwebpackplugin = new HtmlWebpackPlugin({
    template:path.join(__dirname , './src/index.html'),
    filename:'index.html'
})
module.exports = {
    mode:'development',
    plugins:[
        htmlwebpackplugin
    ],
    module:{
        //所有的第三方模块的配置规则 jsx 也不能处理需要我们的这个配置
        rules:[
            {test : /\.js|jsx$/ , use:'babel-loader' , exclude : /node_modules/},
            {test : /\.css$/ , use: ['style-loader' , 'css-loader']},
            {test : /\.ttf|woff|woff2|eot|svg$/ , use: 'url-loader'},
            {test : /\.scss$/ , use : ['style-loader' , 'css-loader?modules&localIdentName=[path][name]-[local]' , 'sass-loader']}
        ]
        // 可以在css-loader 之后通过？来进行追加参数 modules表示为普通的css样式表启用模块化 在css文件中是使用:global 来控制使类名不会被模块化 被local包起来（其实local是默认的）就会进行模块化 所以我们一般不使用local
        // 第三方样式表我们没有意义使其模块化 我们使用.scss 来区分 我们吧.scss 模块化 而不对css文件进行模块化 当然这就要求我们自己写的文件进行模块化 也就是说要求我们自己写的文件应该以scss为结尾
    },
    resolve: {
        extensions: ['.js' , '.jsx' , '.json'],/*定义一下扩展名*/
        alias: {
            '@' : path.join(__dirname , './src')
        }
    }
    // 在webpack中 有一个很大的特性 就是约定大于配置 默认的打包入口文件是src下的index.js
}