var gulp = require('gulp'),
  jasmine = require('gulp-jasmine-node');

gulp.task('test', ['jasmine']);

gulp.task('jasmine', function () {
  return gulp.src('tests/**/*.spec.js')
    .pipe(jasmine());
});
