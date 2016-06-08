(function() {
  'use strict';

  angular
    .module('future150')
    .controller('tournamentsController', tournamentsController);

  tournamentsController.$inject = ['$state', '$scope', 'tournamentsService'];

  function tournamentsController($state, $scope, tournamentsService) {
    var vm = this;
    vm.page = 1;
    vm.pageSize = 10;

    activate();
    $scope.$watchGroup(['vm.page'], activate);

    function activate() {
      tournamentsService.getAll(null, vm.page, vm.pageSize).then(function(result) {
        vm.tournaments = result.tournaments;
        vm.count = result.count;
      });
    }
  }
})();
