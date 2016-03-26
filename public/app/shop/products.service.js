(function() {
  'use strict';

  angular
    .module('future150')
    .factory('productsService', productsService);

  productsService.$inject = ['$http', 'config'];

  function productsService($http, config) {
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
      return $http.get(config.baseApiUrl + '/products', { params: params }).then(function(result) {
        return result.data;
      });
    }

    function getBySlug(slug) {
      return $http.get(config.baseApiUrl + '/products/' + slug).then(function(result) {
        return result.data;
      });
    }
  }
})();
