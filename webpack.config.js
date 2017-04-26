module.exports = {
    entry: './app/app.js',
    output: { path: "app", filename: 'build.js' },
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
    watch: true
};