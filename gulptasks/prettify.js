var gulp = require('gulp'),
  prettify = require('gulp-jsbeautifier'),
  config = require('../gulpconfig.json');

gulp.task('prettify', ['clean'], function () {
  gulp.src([config.paths.js + "**/*.js"])
    .pipe(prettify())
    .pipe(gulp.dest(config.paths.js));
});
