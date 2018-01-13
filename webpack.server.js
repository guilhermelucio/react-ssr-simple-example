const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.config');

const config = {
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

    // When running webpack in the server, that has support to load modules
    // using CMD already, it's a good idea not to include the imports as React,
    // Express and so on at the bundle.js, since they can be loaded asynchronously
    // To do this the webpack-node-externals must be called, which means
    // any module inside of the node_modules folder won't be bundled on the output file.
    // Since the bundle.js file is never sent back to the user, this might not be necessary,
    // there is no problem having them bundled, but... if one wishes 
    externals: [webpackNodeExternals()]
    
};

module.exports = merge(baseConfig, config);
