(function() {
  'use strict';

  angular
    .module('future150')
    .factory('rankingsService', rankingsService);

  rankingsService.$inject = ['$http', 'config'];

  function rankingsService($http, config) {
    var service = {
      getAll: getAll,
      getById: getById
    };
    return service;

    function getAll(type, site) {
      var params = {
        site: site
      };
      return $http.get(config.baseApiUrl + '/rankings/' + type, { params: params }).then(function(result) {
        return result.data;
      });
    }

    function getById(id) {
      return $http.get(config.baseApiUrl + '/rankings/' + id).then(function(result) {
        return result.data;
      });
    }
  }
})();
