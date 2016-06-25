(function() {
  'use strict';

  angular
    .module('future150Admin')
    .factory('tournamentsService', tournamentsService);

  tournamentsService.$inject = ['$http', 'config'];

  function tournamentsService($http, config) {
    var service = {
      getAll: getAll,
      getById: getById,
      save: save
    };
    return service;

    function getAll(q, page, pageSize) {
      var params = {
        q: q,
        page: page,
        pageSize: pageSize
      };
      return $http.get(config.baseApiUrl + '/tournaments', { params: params }).then(function(result) {
        return result.data;
      });
    }
    function getById(id) {
      return $http.get(config.baseApiUrl + '/tournaments/' + id).then(function(result) {
        return result.data;
      });
    }
    function save(tournament) {
      if (tournament._id) {
        return $http.put(config.baseApiUrl + '/tournaments/' + tournament._id, tournament);
      }
      else {
        return $http.post(config.baseApiUrl + '/tournaments', tournament);
      }
    }
  }
})();
