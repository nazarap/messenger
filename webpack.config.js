module.exports = {
    entry: './assets/app/router.js',
    output: { path: "assets/app", filename: 'build.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        index: 'templates/index.html',
        port: 3000,
        historyApiFallback: true
    },
    watch: true
};
