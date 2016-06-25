(function() {
  'use strict';

  angular
    .module('future150Admin')
    .factory('authenticationInterceptor', authenticationInterceptor);

  authenticationInterceptor.$inject = ['$injector'];

  function authenticationInterceptor($injector) {
    return {
      request: function(config) {
        var authenticationService = $injector.get('authenticationService'),
          token = authenticationService.getAuthToken();
        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
      }
    };
  }
})();
