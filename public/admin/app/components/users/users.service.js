(function() {
  'use strict';

  angular
    .module('future150Admin')
    .factory('usersService', usersService);

  usersService.$inject = ['$http', 'config'];

  function usersService($http, config) {
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
      return $http.get(config.baseApiUrl + '/users', { params: params }).then(function(result) {
        return result.data;
      });
    }
    function getById(id) {
      return $http.get(config.baseApiUrl + '/users/' + id).then(function(result) {
        return result.data;
      });
    }
    function save(user) {
      if (user._id) {
        return $http.put(config.baseApiUrl + '/users/' + user._id, user);
      }
      else {
        return $http.post(config.baseApiUrl + '/users', user);
      }
    }
  }
})();
