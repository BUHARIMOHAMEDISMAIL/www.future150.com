var gulp = require('gulp'),
  jasmine = require('gulp-jasmine-node'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  jscs = require('gulp-jscs'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  cssnano = require('gulp-cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  bower = require('gulp-bower'),
  htmlmin = require('gulp-htmlmin'),
  ngHtml2Js = require('gulp-ng-html2js'),
  less = require('gulp-less');
var Server = require('karma').Server;

var allJsFiles = [
    './public/*.js',
    './public/app/**/*.js',
    './public/tests/**/*.js',
    './*.js',
    './app/**/*.js',
    './tests/**/*.js'
  ],
  appJsFiles = [
    './public/app/app.module.js',
    './public/app/**/*.js'
  ],
  libJsFiles = [
    './bower_components/jquery/dist/jquery.js',
    './bower_components/bootstrap/dist/js/bootstrap.js',
    './bower_components/angular/angular.js',
    './bower_components/angular-ui-router/release/angular-ui-router.js',
    './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
    './bower_components/angular-youtube-mb/src/angular-youtube-embed.js',
    './bower_components/angulartics/src/angulartics.js',
    './bower_components/angulartics-google-analytics/lib/angulartics-google-analytics.js',
    './bower_components/angular-local-storage/dist/angular-local-storage.js'
  ],
  libCssFiles = [
    './bower_components/bootstrap/dist/css/bootstrap.css',
    './bower_components/font-awesome/css/font-awesome.css'
  ],
  fontFiles = './bower_components/font-awesome/fonts/*.*',
  htmlFiles = './public/app/**/*.html';

gulp.task('test', [
  'lint',
  'jscs',
  'karma',
  'jasmine'
]);

gulp.task('build', [
  'bundleAndMinifyAppJsFiles',
  'bundleAndMinifyLibJsFiles',
  'compileBundleAndMinifyAppCssFiles',
  'bundleAndMinifyLibCssFiles',
  'copyFontFiles',
  'minifyHtmlFiles'
]);

gulp.task('jasmine', function () {
  return gulp.src('tests/**/*.spec.js')
    .pipe(jasmine());
});

gulp.task('lint', function() {
  return gulp.src(allJsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

gulp.task('jscs', function() {
  return gulp.src(allJsFiles)
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'));
});

gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('bower', function() {
  return bower();
});

gulp.task('bundleAndMinifyAppJsFiles', function() {
  return gulp.src(appJsFiles, { base: './app' })
    .pipe(sourcemaps.init())
    .pipe(concat('future150.js'))
    .pipe(uglify())
    .pipe(rename('future150.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('bundleAndMinifyLibJsFiles', ['bower'], function() {
  return gulp.src(libJsFiles)
    .pipe(sourcemaps.init())
    .pipe(concat('third-party.js'))
    .pipe(uglify())
    .pipe(rename('third-party.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('compileBundleAndMinifyAppCssFiles', function() {
  return gulp.src('./less/future150-bootstrap.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(cssnano())
    .pipe(rename('future150-bootstrap.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('bundleAndMinifyLibCssFiles', ['bower'], function() {
  return gulp.src(libCssFiles)
    .pipe(sourcemaps.init())
    .pipe(concat('third-party.css'))
    .pipe(cssnano())
    .pipe(rename('third-party.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('copyFontFiles', ['bower'], function() {
  return gulp.src(fontFiles)
    .pipe(gulp.dest('./public/fonts'));
});

gulp.task('minifyHtmlFiles', function() {
  return gulp.src(htmlFiles)
    .pipe(sourcemaps.init())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(ngHtml2Js({
      moduleName: 'future150',
      prefix: '/app/'
    }))
    .pipe(concat('future150.tpls.js'))
    .pipe(uglify())
    .pipe(rename('future150.tpls.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/js'));
});
