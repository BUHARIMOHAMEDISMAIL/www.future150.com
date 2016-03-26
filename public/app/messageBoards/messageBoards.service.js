(function() {
  'use strict';

  angular
    .module('future150')
    .factory('messageBoardsService', messageBoardsService);

  messageBoardsService.$inject = ['$http', 'config'];

  function messageBoardsService($http, config) {
    var service = {
      getAllThreads: getAllThreads,
      getThreadBySlug: getThreadBySlug
    };
    return service;

    function getAllThreads(q, page, pageSize) {
      var params = {
        q: q,
        page: page,
        pageSize: pageSize
      };
      return $http.get(config.baseApiUrl + '/messageBoardThreads', { params: params }).then(function(result) {
        return result.data;
      });
    }

    function getThreadBySlug(slug) {
      return $http.get(config.baseApiUrl + '/messageBoardThreads/' + slug).then(function(result) {
        return result.data;
      });
    }
  }
})();
