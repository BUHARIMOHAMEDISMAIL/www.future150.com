(function() {
  'use strict';

  angular
    .module('future150')
    .factory('eventsService', eventsService);

  eventsService.$inject = ['$http', 'config'];

  function eventsService($http, config) {
    var service = {
      getAll: getAll,
      getBySlug: getBySlug,
      getCamps: getCamps,
      getTournaments: getTournaments
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

    function getCamps(q, page, pageSize) {
      var params = {
        q: q,
        page: page,
        pageSize: pageSize,
        eventType: 'camp'
      };
      return $http.get(config.baseApiUrl + '/events', { params: params }).then(function(result) {
        return result.data;
      });
    }

    function getTournaments(q, page, pageSize) {
      var params = {
        q: q,
        page: page,
        pageSize: pageSize,
        eventType: 'tournament'
      };
      return $http.get(config.baseApiUrl + '/events', { params: params }).then(function(result) {
        return result.data;
      });
    }

    function getBySlug(slug) {
      return $http.get(config.baseApiUrl + '/events/' + slug).then(function(result) {
        return result.data;
      });
    }
  }
})();
