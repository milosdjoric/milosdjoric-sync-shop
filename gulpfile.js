var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src("scss/main.scss")
        .pipe(sass())
        .pipe(gulp.dest(""))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);