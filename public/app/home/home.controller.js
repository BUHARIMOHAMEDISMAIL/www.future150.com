(function() {
  'use strict';

  angular
    .module('future150')
    .controller('homeController', homeController);

  homeController.$inject = ['$rootScope', 'config', 'articlesService', 'rankingsService', 'campsService', 'videosService', 'playersService'];

  function homeController($rootScope, config, articlesService, rankingsService, campsService, videosService, playersService) {
    var vm = this;
    vm.selectRankings = selectRankings;
    vm.selectEvents = selectEvents;
    vm.selectVideos = selectVideos;
    vm.selectTrending = selectTrending;
    vm.showMoreNews = showMoreNews;
    vm.showMoreRankingPlayers = showMoreRankingPlayers;
    vm.showMoreEvents = showMoreEvents;
    vm.showMoreVideos = showMoreVideos;
    vm.showMoreTrendingPlayers = showMoreTrendingPlayers;

    activate();

    function activate() {
      vm.visibleArticleCount = 3;
      vm.visibleRankingPlayerCount = 6;
      vm.visibleEventCount = 4;
      vm.visibleVideoCount = 4;
      vm.visibleTrendingPlayerCount = 6;

      articlesService.getAll($rootScope.site).then(function(result) {
        vm.articles = result.articles;
      });

      rankingsService.getAll('national', $rootScope.site).then(function(result) {
        vm.rankings = result.rankings;
      });

      campsService.getAll().then(function(result) {
        vm.camps = result.camps;
      });

      videosService.getAll($rootScope.site).then(function(result) {
        vm.videos = result.videos;
      });

      playersService.getTrendingPlayers($rootScope.site).then(function(trendingPlayers) {
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

    function showMoreNews() {
      vm.visibleArticleCount += 4;
    }

    function showMoreRankingPlayers() {
      vm.visibleRankingPlayerCount += 6;
    }

    function showMoreEvents() {
      vm.visibleEventCount += 4;
    }

    function showMoreVideos() {
      vm.visibleVideoCount += 4;
    }

    function showMoreTrendingPlayers() {
      vm.visibleTrendingPlayerCount += 6;
    }
  }
})();
