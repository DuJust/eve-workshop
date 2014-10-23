'use strict';

var gulp = require('gulp');

gulp.task('views', function () {
  gulp.src('./app/index.html')
    .pipe(gulp.dest('./dist/index.html'));
});

gulp.task('watch', function () {
  gulp.watch('./app/**/*.html', ['views']);
});


gulp.task('server', ['views']);

gulp.task('default', ['server', 'watch']);
