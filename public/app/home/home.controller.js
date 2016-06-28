(function() {
  'use strict';

  angular
    .module('future150')
    .controller('homeController', homeController);

  homeController.$inject = ['$rootScope', '$filter', 'config', 'articlesService', 'rankingsService', 'campsService', 'videosService', 'playersService'];

  function homeController($rootScope, $filter, config, articlesService, rankingsService, campsService, videosService, playersService) {
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
      vm.visibleRankingPlayerCount = 5;
      vm.visibleEventCount = 3;
      vm.visibleVideoCount = 3;
      vm.visibleTrendingPlayerCount = 5;
      vm.isNewsLoading = true;
      vm.isRankingsLoading = true;
      vm.isCampsLoading = true;
      vm.isVideosLoading = true;
      vm.isPlayersLoading = true;

      articlesService.getAll($rootScope.site).then(function(result) {
        vm.articles = result.articles;
        vm.isNewsLoading = false;
      });

      rankingsService.getAll('national', $rootScope.site).then(function(result) {
        vm.rankings = result.rankings;
        if (vm.rankings) {
          vm.activeRanking = $filter('filter')(vm.rankings, { year: config.currentRankingsYear })[0];
          selectRankings(vm.activeRanking._id);
        }
        vm.isRankingsLoading = false;
      });

      campsService.getAll().then(function(result) {
        vm.camps = result.camps;
        vm.isCampsLoading = false;
      });

      videosService.getAll($rootScope.site).then(function(result) {
        vm.videos = result.videos;
        vm.isVideosLoading = false;
      });

      playersService.getTrendingPlayers($rootScope.site).then(function(trendingPlayers) {
        vm.trendingPlayers = trendingPlayers;
        vm.isPlayersLoading = false;
      });
    }

    function selectRankings(id) {
      vm.activeRanking.isSelected = true;
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
      vm.visibleArticleCount += 3;
    }

    function showMoreRankingPlayers() {
      vm.visibleRankingPlayerCount += 5;
    }

    function showMoreEvents() {
      vm.visibleEventCount += 3;
    }

    function showMoreVideos() {
      vm.visibleVideoCount += 3;
    }

    function showMoreTrendingPlayers() {
      vm.visibleTrendingPlayerCount += 5;
    }
  }
})();
