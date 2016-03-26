(function() {
  'use strict';

  angular
    .module('future150')
    .constant('config', {
      baseApiUrl: '',
      siteTwitterHandle: '@future150',
      siteTitle: 'Basketball Recruiting News with Player Rankings & Profiles',
      siteDescription: 'The best source for college basketball recruiting, class rankings and elite player profiles. Discover which high school players are the hottest recruits.',
      defaultProfileImageUrl: '//placehold.it/160x160?text=No Image',
      defaultArticleImageUrl: '//placehold.it/643x341?text=No Image',
      defaultProductImageUrl: '//placehold.it/60x60?text=No Image',
      defaultCollegeImageUrl: '//placehold.it/60x60?text=No Image'
    })
    .constant('sites', [
      {
        path: 'hs',
        name: 'Mens'
      },
      {
        path: 'girls',
        name: 'Womens'
      },
      {
        path: 'jr',
        name: 'Junior'
      }
    ]);

  angular
    .module('future150')
    .config(config);

  config.$inject = ['$httpProvider'];

  function config($httpProvider) {
    $httpProvider.interceptors.push('authenticationInterceptor');
  }
})();
