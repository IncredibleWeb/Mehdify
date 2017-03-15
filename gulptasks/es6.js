var gulp = require('gulp'),
    config = require('../gulpconfig.json'),
    babel = require('gulp-babel');

gulp.task('es6', ['clean', 'eslint'], function () {
    return gulp.src(config.paths.js + "**/*.js").pipe(babel({
        presets: ['es2015']
    }))
        .pipe(gulp.dest(config.paths.jsBuild));
});
