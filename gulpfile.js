var gulp = require('gulp'),
  jasmine = require('gulp-jasmine-node'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish');

gulp.task('test', ['lint', 'jasmine']);

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
