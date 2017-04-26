module.exports = {
    entry: './assets/app/index.js',
    output: { path: "assets/app", filename: 'build.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    },
    devServer: {
        index: 'index.html',
        port: 3000,
        historyApiFallback: true
    },
    watch: true
};
