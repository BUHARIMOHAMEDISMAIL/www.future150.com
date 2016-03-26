(function() {
  'use strict';

  angular
    .module('future150Admin')
    .factory('collegesService', collegesService);

  collegesService.$inject = ['$http', 'config'];

  function collegesService($http, config) {
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
      return $http.get(config.baseApiUrl + '/colleges', { params: params }).then(function(result) {
        return result.data;
      });
    }
    function getById(id) {
      return $http.get(config.baseApiUrl + '/colleges/' + id).then(function(result) {
        return result.data;
      });
    }
    function save(college) {
      if (college._id) {
        return $http.put(config.baseApiUrl + '/colleges/' + college._id, college);
      }
      else {
        return $http.post(config.baseApiUrl + '/colleges', college);
      }
    }
  }
})();
