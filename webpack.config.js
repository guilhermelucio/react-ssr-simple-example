module.exports = {
    module: {
        rules: [
            // Tell webpack to run babel on every file it runs through
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react', // handling react stuff
                        'stage-0', // handling async code

                        // NASTY BOILERPLATE
                        // env is a master preset that webpack uses
                        // that means, run all the different rules to match
                        // the output needed for the last 2 browser versions
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
};
