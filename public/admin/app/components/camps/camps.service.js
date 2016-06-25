(function() {
  'use strict';

  angular
    .module('future150Admin')
    .factory('campsService', campsService);

  campsService.$inject = ['$http', 'config'];

  function campsService($http, config) {
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
      return $http.get(config.baseApiUrl + '/camps', { params: params }).then(function(result) {
        return result.data;
      });
    }
    function getById(id) {
      return $http.get(config.baseApiUrl + '/camps/' + id).then(function(result) {
        return result.data;
      });
    }
    function save(camp) {
      if (camp._id) {
        return $http.put(config.baseApiUrl + '/camps/' + camp._id, camp);
      }
      else {
        return $http.post(config.baseApiUrl + '/camps', camp);
      }
    }
  }
})();
