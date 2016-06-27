(function() {
  'use strict';

  angular
    .module('future150Admin')
    .factory('alumniService', alumniService);

  alumniService.$inject = ['$http', 'config'];

  function alumniService($http, config) {
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
      return $http.get(config.baseApiUrl + '/alumnilists', { params: params }).then(function(result) {
        return result.data;
      });
    }
    function getById(id) {
      return $http.get(config.baseApiUrl + '/alumnilists/' + id).then(function(result) {
        return result.data;
      });
    }
    function save(alumni) {
      if (alumni.id) {
        return $http.put(config.baseApiUrl + '/alumnilists/' + alumni.id, alumni);
      }
      else {
        return $http.post(config.baseApiUrl + '/alumnilists', alumni);
      }
    }
  }
})();
