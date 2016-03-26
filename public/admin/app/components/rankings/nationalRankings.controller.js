(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('nationalRankingsController', nationalRankingsController);

  nationalRankingsController.$inject = ['$scope', 'rankingsService'];

  function nationalRankingsController($scope, rankingsService) {
    var vm = this;
    vm.q = '';
    vm.page = 1;
    vm.pageSize = 10;

    activate();
    $scope.$watchGroup(['vm.q', 'vm.page'], activate);

    function activate() {
      rankingsService.getAll('national', vm.q, vm.page, vm.pageSize).then(function(result) {
        vm.rankings = result.rankings;
        vm.count = result.count;
      });
    }
  }
})();
