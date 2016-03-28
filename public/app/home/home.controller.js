(function() {
  'use strict';

  angular
    .module('future150')
    .controller('homeController', homeController);

  homeController.$inject = ['$rootScope', 'config', 'articlesService', 'rankingsService', 'eventsService', 'videosService', 'playersService'];

  function homeController($rootScope, config, articlesService, rankingsService, eventsService, videosService, playersService) {
    var vm = this;
    vm.selectRankings = selectRankings;
    vm.selectEvents = selectEvents;
    vm.selectVideos = selectVideos;
    vm.selectTrending = selectTrending;

    activate();

    function activate() {
      articlesService.getFeaturedArticle($rootScope.site).then(function(result) {
        vm.featuredArticle = result.featuredArticle;
        $rootScope.featuredImageUrl = result.featuredArticle.imageUrl;
      });

      articlesService.getHighlighedArticles($rootScope.site).then(function(result) {
        vm.highlighedArticles = result.highlighedArticles;
      });

      rankingsService.getAll('national', $rootScope.site).then(function(result) {
        vm.rankings = result.rankings;
      });

      eventsService.getUpcomingEvents().then(function(result) {
        vm.upcomingEvents = result.upcomingEvents;
      });

      videosService.getTopVideos($rootScope.site).then(function(result) {
        vm.topVideos = result.topVideos;
      });

      playersService.getTrendingPlayers($rootScope.site, null, null, 6).then(function(trendingPlayers) {
        if (angular.isArray(trendingPlayers)) {
          trendingPlayers.forEach(function(player) {
            if (!player.imageUrl) {
              player.imageUrl = config.defaultProfileImageUrl;
            }
          });
        }
        vm.trendingPlayers = trendingPlayers;
      });
    }

    function selectRankings(id) {
      rankingsService.getById(id).then(function(ranking) {
        vm.selectedRanking = ranking;
      });
    }

    function selectEvents(type) {

    }

    function selectVideos(sort) {

    }

    function selectTrending(sort) {

    }
  }
})();
