(function() {
  'use strict';

  angular
    .module('future150')
    .factory('videosService', videosService);

  videosService.$inject = ['$http', 'config'];

  function videosService($http, config) {
    var service = {
      getAll: getAll
    };
    return service;

    function getAll(site, q, page, pageSize) {
      var params = {
        site: site,
        q: q,
        page: page,
        pageSize: pageSize
      };
      return $http.get(config.baseApiUrl + '/videos', { params: params }).then(function(result) {
        return result.data;
      });
    }
  }
})();
