var gulp = require('gulp'),
    config = require('../gulpconfig.json'),
    eslint = require('gulp-eslint');

    gulp.task('eslint', function() {
        return gulp.src([
            config.paths.js + "**/*.js", 
            '!node_modules{,/**}'
        ])
        .pipe(eslint())
        .pipe(eslint.format());
    });