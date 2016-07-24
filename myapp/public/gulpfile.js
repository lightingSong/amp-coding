'use strict';

var gulp = require('gulp');
var liveServer = require("gulp-live-server");
var browserSync = require("browser-sync");
var browserify = require("browserify");
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./app/sass/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/sass/app.scss', ['sass']);
});