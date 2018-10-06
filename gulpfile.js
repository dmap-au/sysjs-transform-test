/*globals require, console*/

'use strict';

var     gulp            = require('gulp'),
        babel           = require('gulp-babel'),
        rename          = require('gulp-rename'),
        sjsPluginNew    = {plugins:['@babel/plugin-transform-modules-systemjs']},
        sjsPluginOld    = {plugins:['babel-plugin-transform-es2015-modules-systemjs']};


gulp.task('sjsOld', () => {
        return gulp
                .src('./src/script.js' )
                .pipe(rename('script.old.js'))
                .pipe(babel(sjsPluginOld))
                .pipe(gulp.dest('./build'));
});

gulp.task('sjsNew', () => {
        return gulp
                .src('./src/script.js' )
                .pipe(rename('script.new.js'))
                .pipe(babel(sjsPluginNew))
                .pipe(gulp.dest('./build'));
});

gulp.task('default',  gulp.series('sjsOld', 'sjsNew')) ;



