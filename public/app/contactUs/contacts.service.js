(function() {
  'use strict';

  angular
    .module('future150')
    .factory('contactsService', contactsService);

  contactsService.$inject = ['$http', 'config'];

  function contactsService($http, config) {
    var service = {
      getAll: getAll
    };
    return service;

    function getAll() {
      return $http.get(config.baseApiUrl + '/contacts').then(function(result) {
        return result.data;
      });
    }
  }
})();
