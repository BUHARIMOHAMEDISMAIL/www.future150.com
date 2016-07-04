(function() {
  'use strict';

  angular
    .module('future150Admin')
    .factory('merchandiseService', merchandiseService);

  merchandiseService.$inject = ['$http', 'config'];

  function merchandiseService($http, config) {
    var service = {
      getAll: getAll,
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
  }
})();
