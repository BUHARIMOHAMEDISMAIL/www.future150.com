(function() {
  'use strict';

  angular
    .module('future150Admin')
    .factory('contactsService', contactsService);

  contactsService.$inject = ['$http', 'config'];

  function contactsService($http, config) {
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
      return $http.get(config.baseApiUrl + '/contacts', { params: params }).then(function(result) {
        return result.data;
      });
    }
    function getById(id) {
      return $http.get(config.baseApiUrl + '/contacts/' + id).then(function(result) {
        return result.data;
      });
    }
    function save(contact) {
      if (contact._id) {
        return $http.put(config.baseApiUrl + '/contacts/' + contact._id, contact);
      }
      else {
        return $http.post(config.baseApiUrl + '/contacts', contact);
      }
    }
  }
})();
