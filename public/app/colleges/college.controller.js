(function() {
  'use strict';

  angular
    .module('future150')
    .controller('collegeController', collegeController);

  collegeController.$inject = ['$state', '$rootScope', 'collegesService', 'rankingsService'];

  function collegeController($state, $rootScope, collegesService, rankingsService) {
    var vm = this;
    vm.selectRankings = selectRankings;

    if ($state.params.slug) {
      collegesService.getBySlug($state.params.slug).then(function(college) {
        $rootScope.title = college.name;

        vm.college = college;
      });
      rankingsService.getAll('national', $rootScope.site).then(function(result) {
        vm.rankings = result.rankings;
      });
    }

    function selectRankings(id) {
      rankingsService.getById(id).then(function(ranking) {
        vm.selectedRanking = ranking;
      });
    }
  }
})();
