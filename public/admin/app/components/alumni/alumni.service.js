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
      return $http.get(config.baseApiUrl + '/alumni', { params: params }).then(function(result) {
        return result.data;
      });
    }
    function getById(id) {
      return $http.get(config.baseApiUrl + '/alumni/' + id).then(function(result) {
        return result.data;
      });
    }
    function save(camp) {
      if (alumni._id) {
        return $http.put(config.baseApiUrl + '/alumni/' + alumni._id, alumni);
      }
      else {
        return $http.post(config.baseApiUrl + '/alumni', alumni);
      }
    }
  }
})();
