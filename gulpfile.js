var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var csslint = require('gulp-csslint');
var jshint = require('gulp-jshint');
var minifycss = require('gulp-minify-css');
var bower = require('gulp-bower');
var karma = require('./index');

gulp.task('bower', function() {
  bower('bower/')
    .pipe(gulp.dest('./build/css'));
});

gulp.task('css', function() {
   gulp.src('./build/css/bootstrap/dist/css/*.min.css')
    .pipe(minifycss())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['bower', 'css'], function(){});

