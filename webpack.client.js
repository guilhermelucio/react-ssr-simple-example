const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

const config = {
    // Tell webpack what's the root file of the application
    entry: './src/client/index.js',

    // Tell webpack what's the output folder
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);