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
    watch: true
};
