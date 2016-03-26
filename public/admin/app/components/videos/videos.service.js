(function() {
  'use strict';

  angular
    .module('future150Admin')
    .factory('videosService', videosService);

  videosService.$inject = ['$http', 'config'];

  function videosService($http, config) {
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
      return $http.get(config.baseApiUrl + '/videos', { params: params }).then(function(result) {
        return result.data;
      });
    }
    function getById(id) {
      return $http.get(config.baseApiUrl + '/videos/' + id).then(function(result) {
        return result.data;
      });
    }
    function save(video) {
      if (video._id) {
        return $http.put(config.baseApiUrl + '/videos/' + video._id, video);
      }
      else {
        return $http.post(config.baseApiUrl + '/videos', video);
      }
    }
  }
})();
