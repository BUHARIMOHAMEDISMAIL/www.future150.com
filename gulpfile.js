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
  less = require('gulp-less'),
  runSequence = require('run-sequence');
var Server = require('karma').Server;

var allJsFiles = [
    './public/admin/*.js',
    './public/admin/app/**/*.js',
    './public/admin/tests/**/*.js',
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
  adminJsFiles = [
    './public/admin/app/app.module.js',
    './public/admin/app/**/*.js'
  ],
  libJsFiles = [
    './bower_components/jquery/dist/jquery.js',
    './bower_components/bootstrap/dist/js/bootstrap.js',
    './bower_components/Chart.js/Chart.js',
    './bower_components/angular/angular.js',
    './bower_components/angular-ui-router/release/angular-ui-router.js',
    './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
    './bower_components/summernote/dist/summernote.js',
    './bower_components/angular-summernote/dist/angular-summernote.js',
    './bower_components/ui-select/dist/select.js',
    './bower_components/jquery-ui/jquery-ui.js',
    './bower_components/angular-youtube-mb/src/angular-youtube-embed.js',
    './bower_components/angulartics/src/angulartics.js',
    './bower_components/angulartics-google-analytics/lib/angulartics-google-analytics.js',
    './bower_components/angular-local-storage/dist/angular-local-storage.js',
    './bower_components/jquery-ui/ui/sortable.js',
    './bower_components/angular-ui-sortable/sortable.js',
    './bower_components/angular-chart.js/dist/angular-chart.js',
    './bower_components/checklist-model/checklist-model.js',
    './bower_components/underscore/underscore.js',
    './bower_components/ng-tags-input/ng-tags-input.js'
  ],
  libCssFiles = [
    './bower_components/bootstrap/dist/css/bootstrap.css',
    './bower_components/font-awesome/css/font-awesome.css',
    './bower_components/summernote/dist/summernote.css',
    './bower_components/ui-select/dist/select.css',
    './bower_components/angular-chart.js/dist/angular-chart.css',
    './bower_components/ng-tags-input/ng-tags-input.css',
    './bower_components/ng-tags-input/ng-tags-input.bootstrap.css'
  ],
  fontFiles = './bower_components/font-awesome/fonts/*.*',
  htmlFiles = './public/app/**/*.html',
  lessFiles = './less/*.less';

gulp.task('test', function() {
  runSequence(
    ['lint',
    'jscs'],
    'jsTests',
    'unitTests',
    'integrationTests'
  );
});

gulp.task('build', [
  'bundleAndMinifyAppJsFiles',
  'bundleAndMinifyAdminJsFiles',
  'bundleAndMinifyLibJsFiles',
  'compileBundleAndMinifyAppCssFiles',
  'bundleAndMinifyLibCssFiles',
  'copyFontFiles',
  'minifyHtmlFiles'
]);

gulp.task('watch', [
  'watchAppJsFiles',
  'watchAdminJsFiles',
  'watchAppCssFiles',
  'watchHtmlFiles'
]);

gulp.task('watchAppJsFiles', function() {
  gulp.watch(appJsFiles, ['bundleAndMinifyAppJsFiles']);
});

gulp.task('watchAdminJsFiles', function() {
  gulp.watch(adminJsFiles, ['bundleAndMinifyAdminJsFiles']);
});

gulp.task('watchAppCssFiles', function() {
  gulp.watch(lessFiles, ['compileBundleAndMinifyAppCssFiles']);
});

gulp.task('watchHtmlFiles', function() {
  gulp.watch(htmlFiles, ['minifyHtmlFiles']);
});

gulp.task('bower', function() {
  return bower();
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

gulp.task('jsTests', ['bower'], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('unitTests', function () {
  return gulp.src('tests/unit/**/*.spec.js')
    .pipe(jasmine());
});

gulp.task('integrationTests', function () {
  return gulp.src('tests/integration/**/*.spec.js')
    .pipe(jasmine({ timeout: 10000 }));
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

gulp.task('bundleAndMinifyAdminJsFiles', function() {
  return gulp.src(adminJsFiles, { base: './admin/app' })
    .pipe(sourcemaps.init())
    .pipe(concat('future150-admin.js'))
    .pipe(uglify())
    .pipe(rename('future150-admin.min.js'))
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
