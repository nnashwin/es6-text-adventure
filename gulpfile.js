var gulp = require('gulp'),
    watch = require('gulp-watch'),
    shell = require('gulp-shell');

gulp.task('babel-compile', shell.task([
    'npm run script'
]))

gulp.task('watch', function () {
    watch('./src/**/*.js', function () {
        gulp.start('babel-compile')
    })
})

gulp.task('default', ['babel-compile', 'watch'])
