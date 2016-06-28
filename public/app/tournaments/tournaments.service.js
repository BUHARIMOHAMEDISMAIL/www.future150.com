(function() {
  'use strict';

  angular
    .module('future150')
    .factory('tournamentsService', tournamentsService);

  tournamentsService.$inject = ['$http', 'config'];

  function tournamentsService($http, config) {
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
      return $http.get(config.baseApiUrl + '/tournaments', { params: params }).then(function(result) {
        return result.data;
      });
    }
    function getBySlug(slug) {
      return $http.get(config.baseApiUrl + '/tournaments/' + slug).then(function(result) {
        return result.data;
      });
    }
  }
})();
