'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  browserify = require('gulp-browserify');


var express = require('express'),
  serverport = 3000;

var server = express();
server.use(express.static('dist'));
server.all('/*', function (request, response) {
  response.sendFile('index.html', {root: 'dist'});
});

gulp.task('browserify', function () {
  gulp.src('app/scripts/main.js')
    .pipe(browserify())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('views', function () {
  gulp.src('app/index.html')
    .pipe(gulp.dest('dist/'));

  gulp.src('app/views/**/*')
    .pipe(gulp.dest('dist/views/'));
});

gulp.task('watch', function () {
  gulp.watch('app/**/*.html', ['views']);
  server.listen(serverport);
});


gulp.task('server', ['views', 'browserify']);

gulp.task('default', ['server', 'watch']);
