(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('playersController', playersController);

  playersController.$inject = ['$scope', 'playersService'];

  function playersController($scope, playersService) {
    var vm = this;
    vm.q = '';
    vm.page = 1;
    vm.pageSize = 10;

    activate();
    $scope.$watchGroup(['vm.q', 'vm.page'], activate);

    function activate() {
      playersService.getAll(vm.q, vm.page, vm.pageSize).then(function(result) {
        vm.players = result.players;
        vm.count = result.count;
      });
    }
  }
})();
