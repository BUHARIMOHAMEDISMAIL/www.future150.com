var gulp = require('gulp'),
  jasmine = require('gulp-jasmine-node'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  jscs = require('gulp-jscs'),
  rename = require('gulp-rename');

gulp.task('test', ['lint', 'jscs', 'jasmine']);

gulp.task('jasmine', function () {
  return gulp.src('tests/**/*.spec.js')
    .pipe(jasmine());
});

gulp.task('lint', function() {
  return gulp.src(['./*.js', './app/**/*.js', './tests/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

gulp.task('jscs', function() {
  return gulp.src(['./*.js', './app/**/*.js', './tests/**/*.js'])
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'));
});
