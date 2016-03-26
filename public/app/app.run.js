(function() {
  'use strict';

  angular
    .module('future150')
    .run(run);

  run.$inject = ['$rootScope', '$location', '$filter', 'config', 'sites'];

  function run($rootScope, $location, $filter, config, sites) {
    $rootScope.twitterHandle = config.siteTwitterHandle;
    $rootScope.title = config.siteTitle;
    $rootScope.description = config.siteDescription;
    $rootScope.url = $location.absUrl();
    $rootScope.defaultProfileImageUrl = config.defaultProfileImageUrl;
    $rootScope.defaultArticleImageUrl = config.defaultArticleImageUrl;
    $rootScope.defaultProductImageUrl = config.defaultProductImageUrl;
    $rootScope.defaultCollegeImageUrl = config.defaultCollegeImageUrl;
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      $rootScope.site = toParams.site;
      $rootScope.selectedSite = $filter('filter')(sites, { path: toParams.site })[0];
    });
  }
})();
