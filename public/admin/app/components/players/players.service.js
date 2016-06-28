(function() {
  'use strict';

  angular
    .module('future150Admin')
    .factory('playersService', playersService);

  playersService.$inject = ['$http', 'config'];

  function playersService($http, config) {
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
      return $http.get(config.baseApiUrl + '/players', { params: params }).then(function(result) {
        return result.data;
      });
    }
    function getById(id) {
      return $http.get(config.baseApiUrl + '/players/' + id).then(function(result) {
        return result.data;
      });
    }
    function save(player) {
      if (player._id) {
        return $http.put(config.baseApiUrl + '/players/' + player._id, player);
      }
      else {
        return $http.post(config.baseApiUrl + '/players', player);
      }
    }
  }
})();
