var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('js', function() {
  return gulp
    .src([
        'js/app.js',
        'js/controllers/*.js',
        'js/directives/*.js',
        'js/factories/*.js',
        'js/services/*.js'
    ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    ;
});

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('serve', ['js'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('js/**/*.js', ['js-watch']);
});