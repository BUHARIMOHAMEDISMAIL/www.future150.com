(function() {
  'use strict';

  angular
    .module('future150Admin')
    .factory('rankingsService', rankingsService);

  rankingsService.$inject = ['$http', 'config'];

  function rankingsService($http, config) {
    var service = {
      getAll: getAll,
      getById: getById,
      save: save
    };
    return service;

    function getAll(type, q, page, pageSize) {
      var params = {
        q: q,
        page: page,
        pageSize: pageSize
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
    function save(ranking) {
      if (ranking._id) {
        return $http.put(config.baseApiUrl + '/rankings/' + ranking._id, ranking);
      }
      else {
        return $http.post(config.baseApiUrl + '/rankings', ranking);
      }
    }
  }
})();
