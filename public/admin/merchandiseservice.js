(function() {
  'use strict';

  angular
    .module('future150Admin')
    .factory('merchandiseService', merchandiseService);

  merchandiseService.$inject = ['$http', 'config'];

  function merchandiseService($http, config) {
    var service = {
      getAll: getAll,
      // getById: getById,
      // save: save
    };
    return service;

    function getAll(q, page, pageSize) {
      var params = {
        q: q,
        page: page,
        pageSize: pageSize
      };
      return $http.get(config.baseApiUrl + '/merchandises', { params: params }).then(function(result) {
        return result.data;
        console.log(result.data);
      });
    }
    // function getById(id) {
    //   return $http.get(config.baseApiUrl + '/dummies/' + id).then(function(result) {
    //     return result.data;
    //   });
    // }
    // function save(dummy) {
    //   if (dummy._id) {
    //     return $http.put(config.baseApiUrl + '/dummies/' + dummy._id, dummy);
    //   }
    //   else {
    //     return $http.post(config.baseApiUrl + '/dummies', dummy);
    //   }
    // }
  }
})();
