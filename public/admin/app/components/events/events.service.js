(function() {
  'use strict';

  angular
    .module('future150Admin')
    .factory('eventsService', eventsService);

  eventsService.$inject = ['$http', 'config'];

  function eventsService($http, config) {
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
      return $http.get(config.baseApiUrl + '/events', { params: params }).then(function(result) {
        return result.data;
      });
    }
    function getById(id) {
      return $http.get(config.baseApiUrl + '/events/' + id).then(function(result) {
        return result.data;
      });
    }
    function save(event) {
      if (event._id) {
        return $http.put(config.baseApiUrl + '/events/' + event._id, event);
      }
      else {
        return $http.post(config.baseApiUrl + '/events', event);
      }
    }
  }
})();
