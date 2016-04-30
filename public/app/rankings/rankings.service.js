(function() {
  'use strict';

  angular
    .module('future150')
    .factory('rankingsService', rankingsService);

  rankingsService.$inject = ['$http', 'config'];

  function rankingsService($http, config) {
    var service = {
      getAll: getAll,
      getById: getById
    };
    return service;

    function getAll(type, site) {
      var params = {
        site: site
      };
      return $http.get(config.baseApiUrl + '/rankings/' + type, { params: params }).then(function(result) {
        if (result.data && result.data.rankings && angular.isArray(result.data.rankings)) {
          result.data.rankings.forEach(function(ranking) {
            if (angular.isArray(ranking.players)) {
              ranking.players.forEach(function(player) {
                player.imageUrl = player.imageUrl || config.defaultProfileImageUrl;
              });
            }
          });
        }
        return result.data;
      });
    }

    function getById(id) {
      return $http.get(config.baseApiUrl + '/rankings/' + id).then(function(result) {
        if (result.data && result.data.players && angular.isArray(result.data.players)) {
          result.data.players.forEach(function(playerRanking) {
            playerRanking.player.imageUrl = playerRanking.player.imageUrl || config.defaultProfileImageUrl;
          });
        }
        return result.data;
      });
    }
  }
})();
