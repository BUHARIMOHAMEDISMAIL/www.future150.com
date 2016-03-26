(function() {
  'use strict';

  angular
    .module('future150')
    .factory('authenticationService', authenticationService);

  authenticationService.$inject = ['$http', 'config', 'localStorageService'];

  function authenticationService($http, config, localStorageService) {
    var user;

    var service = {
      login: login,
      logout: logout,
      getCurrentUser: getCurrentUser,
      isAuthenticated: isAuthenticated,
      getAuthToken: getAuthToken
    };
    return service;

    function login(user) {
      return $http.post(config.baseApiUrl + '/token', user).then(function(result) {
        localStorageService.set('token', result.data.token);
        return updateCurrentUser();
      });
    }

    function logout() {
      localStorageService.remove('token');
      localStorageService.remove('user');
    }

    function getCurrentUser() {
      return localStorageService.get('user');
    }

    function updateCurrentUser() {
      return $http.get(config.baseApiUrl + '/profile').then(function(result) {
        result.data.user.profileImageUrl = result.data.user.profileImageUrl || config.defaultProfileImageUrl;
        localStorageService.set('user', result.data.user);
      });
    }

    function isAuthenticated() {
      return !!getCurrentUser();
    }

    function getAuthToken() {
      return localStorageService.get('token');
    }
  }
})();
