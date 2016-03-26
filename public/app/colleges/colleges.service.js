(function() {
  'use strict';

  angular
    .module('future150')
    .factory('collegesService', collegesService);

  collegesService.$inject = ['$http', 'config'];

  function collegesService($http, config) {
    var service = {
      getAll: getAll,
      getBySlug: getBySlug
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

    function getBySlug(slug) {
      return $http.get(config.baseApiUrl + '/colleges/' + slug).then(function(result) {
        return result.data;
      });
    }
  }
})();
