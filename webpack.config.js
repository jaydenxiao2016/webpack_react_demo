var path =require('path');
module.exports = {
    //入口文件
    entry:'./app/index.js',
    //出口文件
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'temp/'
    },
    devServer:{
        contentBase:'./',
        host:'localhost',
        compress: true,
        port:4003
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders:"babel-loader",
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    }
}