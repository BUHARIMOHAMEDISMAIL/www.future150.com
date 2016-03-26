(function() {
  'use strict';

  angular
    .module('future150')
    .factory('authenticationInterceptor', authenticationInterceptor);

  authenticationInterceptor.$inject = ['config', '$injector'];

  function authenticationInterceptor(globalConfig, $injector) {
    return {
      request: function(config) {
        var authenticationService = $injector.get('authenticationService'),
          token = authenticationService.getAuthToken();
        if (config.url.indexOf(globalConfig.baseApiUrl) === 0 && token) {
          config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
      }
    };
  }
})();
