const path = require('path');

module.exports = {
    // Inform webpack that we're building a bundle
    // for nodeJS, rather than for the browser
    target: 'node',

    // Tell webpack the root file of the
    // server application
    entry: './src/index.js',

    // Tell webpack where to put the output file
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

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