(function() {
  'use strict';

  angular
    .module('future150')
    .factory('playersService', playersService);

  playersService.$inject = ['$http', 'config'];

  function playersService($http, config) {
    var service = {
      getAll: getAll,
      getBySlug: getBySlug,
      getTrendingPlayers: getTrendingPlayers
    };
    return service;

    function getAll(q, page, pageSize) {
      var params = {
        q: q,
        page: page,
        pageSize: pageSize
      };
      return $http.get(config.baseApiUrl + '/players', { params: params }).then(function(result) {
        if (result.data && result.data.players && angular.isArray(result.data.players)) {
          result.data.players.forEach(function(player) {
            player.imageUrl = player.imageUrl || config.defaultProfileImageUrl;
          });
        }
        return result.data;
      });
    }

    function getBySlug(slug) {
      return $http.get(config.baseApiUrl + '/players/' + slug).then(function(result) {
        return result.data;
      });
    }

    function getTrendingPlayers(site, q, page, pageSize) {
      var params = {
        site: site,
        q: q,
        page: page,
        pageSize: pageSize
      };
      return $http.get(config.baseApiUrl + '/players/trending', { params: params }).then(function(result) {
        if (result.data && angular.isArray(result.data)) {
          result.data.forEach(function(player) {
            player.imageUrl = player.imageUrl || config.defaultProfileImageUrl;
          });
        }
        return result.data;
      });
    }
  }
})();
