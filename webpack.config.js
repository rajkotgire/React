/**
 * Created by rajendrak on 7/9/2016.
 */

var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool:'inline-source-map',
    entry:[
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    resolve:{
        moduleDirectories:['node_module','src'],
        extension:['','.js']
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loaders:['react-hot','babel?presets[]=react,presets[]=es2015']
            }
        ]


    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
