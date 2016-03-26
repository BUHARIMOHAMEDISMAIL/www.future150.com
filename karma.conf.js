module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './bower_components/sinonjs/sinon.js',
      './bower_components/jasmine-sinon/lib/jasmine-sinon.js',
      './bower_components/angular/angular.js',
      './bower_components/angular-ui-router/release/angular-ui-router.js',
      './bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      './bower_components/angular-mocks/angular-mocks.js',
      './bower_components/angular-youtube-mb/dist/angular-youtube-embed.min.js',
      './bower_components/angulartics/dist/angulartics.min.js',
      './bower_components/angulartics-google-analytics/dist/angulartics-google-analytics.min.js',
      './bower_components/angular-local-storage/dist/angular-local-storage.min.js',
      './public/app/app.module.js',
      './public/app/app.config.js',
      './public/app/**/*.js',
      './public/tests/unit/**/*.spec.js'
    ],
    exclude: [
      './public/app/app.routes.js'
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
