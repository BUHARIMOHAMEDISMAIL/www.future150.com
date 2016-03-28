module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './bower_components/sinonjs/sinon.js',
      './bower_components/jasmine-sinon/lib/jasmine-sinon.js',
      './bower_components/jquery/dist/jquery.js',
      './bower_components/bootstrap/dist/js/bootstrap.js',
      './bower_components/Chart.js/Chart.js',
      './bower_components/angular/angular.js',
      './bower_components/angular-mocks/angular-mocks.js',
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
      './public/app/app.module.js',
      './public/app/app.config.js',
      './public/app/**/*.js',
      './public/tests/unit/**/*.spec.js',
      './public/admin/app/app.module.js',
      './public/admin/app/app.config.js',
      './public/admin/app/**/*.js',
      './public/admin/tests/unit/**/*.spec.js'
    ],
    exclude: [
      './public/app/app.routes.js',
      './public/admin/app/app.routes.js'
    ],
    reporters: ['spec'],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });
};
