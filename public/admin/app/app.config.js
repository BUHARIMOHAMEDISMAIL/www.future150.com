(function() {
  'use strict';

  angular
    .module('future150Admin')
    .constant('config', {
      baseApiUrl: '',
      currentRankingYear: 2015,
      lastRankingYear: 2020,
      defaultProfileImageUrl: '//placehold.it/160x160?text=No Image'
    });

  angular
    .module('future150Admin')
    .config(config);

  config.$inject = ['$httpProvider'];

  function config($httpProvider) {
    $httpProvider.interceptors.push('authenticationInterceptor');
  }
})();
