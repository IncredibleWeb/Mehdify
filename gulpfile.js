var gulp = require('gulp'),
    requireDir = require('require-dir');

requireDir('./gulptasks');

gulp.task('default', ['test']);