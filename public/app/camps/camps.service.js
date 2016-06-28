(function() {
  'use strict';

  angular
    .module('future150')
    .factory('campsService', campsService);

  campsService.$inject = ['$http', 'config'];

  function campsService($http, config) {
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
      return $http.get(config.baseApiUrl + '/camps', { params: params }).then(function(result) {
        return result.data;
      });
    }

    function getBySlug(slug) {
      return $http.get(config.baseApiUrl + '/camps/' + slug).then(function(result) {
        return result.data;
      });
    }
  }
})();
