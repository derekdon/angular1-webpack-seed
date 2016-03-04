'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('./webpack.config.js'),
    bower = require('bower'),
    sh = require('shelljs'),
    path = require('path'),
    paths = {
        index: ['./www/index.html'],
        html: ['./app/**/*.html'],
        js: ['./app/**/*.js']
    };

gulp.task('default', ['copy', 'webpack-dev-server']);

gulp.task('copy', function () {
    return gulp.src('./app/index.html')
        .pipe(gulp.dest('./www/'));
});

gulp.task('install', ['git-check'], function () {
    return bower.commands.install()
        .on('log', function (data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function (done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});

gulp.task('build', ['copy', 'webpack:build']);

gulp.task('webpack:build', function (callback) {

    var wpConfig = Object.create(webpackConfig);
    wpConfig.plugins = wpConfig.plugins.concat(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin()
    );

    webpack(wpConfig, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack:build', err);
        }
        gutil.log('[webpack:build]', stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('webpack:build-dev', function (callback) {

    var devCompiler,
        wpConfig = Object.create(webpackConfig);

    wpConfig.devtool = 'source-map';
    wpConfig.debug = true;
    devCompiler = webpack(wpConfig);
    devCompiler.run(function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack:build-dev', err);
        }
        gutil.log('[webpack:build-dev]', stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('webpack-dev-server', function (callback) {

    var wpConfig = Object.create(webpackConfig);
    wpConfig.devtool = 'source-map';
    wpConfig.debug = true;
    wpConfig.plugins = wpConfig.plugins.concat(
        new webpack.optimize.UglifyJsPlugin({
            mangle: false
        })
    );

    new WebpackDevServer(webpack(wpConfig), {
        contentBase: path.join(__dirname, 'www'),
        stats: {
            colors: true
        }
    }).listen(8080, 'localhost', function (err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
    });
});