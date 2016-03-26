(function() {
  'use strict';

  angular
    .module('future150')
    .controller('rankingsController', rankingsController);

  rankingsController.$inject = ['$rootScope', 'rankingsService'];

  function rankingsController($rootScope, rankingsService) {
    var vm = this;
    vm.selectRankings = selectRankings;

    $rootScope.title = 'National Rankings';
    $rootScope.description = '';

    rankingsService.getAll('national', $rootScope.site).then(function(result) {
      vm.rankings = result.rankings;
    });

    function selectRankings(id) {
      rankingsService.getById(id).then(function(ranking) {
        vm.selectedRanking = ranking;
      });
    }
  }
})();
