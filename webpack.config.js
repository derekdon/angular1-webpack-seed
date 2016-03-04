'use strict';

var webpack = require('webpack'),
    path = require('path'),
    BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
    entry: {
        vendor: [
            'angular',
            'angular-ui-router',
            'angular-ui-bootstrap',
            'lodash',
            'faker',
            'd3'
        ],
        app: './app'
    },
    output: {
        path: __dirname + '/www',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'vendor', 'app', 'app/module', 'app/common/sass'],
        extensions: ['', '.js', '.scss']
    },
    module: {
        loaders: [
            { test: /\.json$/, loaders: ['json'] },
            { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.(woff|woff2)($|\?)/, loader: 'url?limit=10000&minetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)($|\?)/, loader: 'file' },
            { test: /\.(htm|html)$/, loader: 'html' },
            { test: /\.csv$/, loader: 'dsv' }
        ]
    },
    plugins: [
        new BowerWebpackPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js',
            children: true,
            minChunks: 2
        })
    ]
};