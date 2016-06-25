(function() {
  'use strict';

  angular
    .module('future150Admin')
    .factory('articlesService', articlesService);

  articlesService.$inject = ['$http', 'config'];

  function articlesService($http, config) {
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
      return $http.get(config.baseApiUrl + '/articles', { params: params }).then(function(result) {
        return result.data;
      });
    }
    function getById(id) {
      return $http.get(config.baseApiUrl + '/articles/' + id).then(function(result) {
        return result.data;
      });
    }
    function save(article) {
      if (article._id) {
        return $http.put(config.baseApiUrl + '/articles/' + article._id, article);
      }
      else {
        return $http.post(config.baseApiUrl + '/articles', article);
      }
    }
  }
})();
