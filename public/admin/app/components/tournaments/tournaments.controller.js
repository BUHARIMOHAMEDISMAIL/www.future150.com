(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('tournamentsController', tournamentsController);

  tournamentsController.$inject = ['$scope', 'tournamentsService'];

  function tournamentsController($scope, tournamentsService) {
    var vm = this;
    vm.q = '';
    vm.page = 1;
    vm.pageSize = 10;

    activate();
    $scope.$watchGroup(['vm.q', 'vm.page'], activate);

    function activate() {
      tournamentsService.getAll(vm.q, vm.page, vm.pageSize).then(function(result) {
        vm.tournaments = result.tournaments;
        vm.count = result.count;
      });
    }
  }
})();
