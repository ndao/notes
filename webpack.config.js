// webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    // The standard entry point and output config
    entry: ['./index.js'],
    output: {
        filename: "popup.js"
    },
    module: {
        loaders: [
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
            // You could also use other loaders the same way. I. e. the autoprefixer-loader
        ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ]
}
