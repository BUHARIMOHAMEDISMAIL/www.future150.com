(function() {
  'use strict';

  angular
    .module('future150')
    .controller('tournamentsController', tournamentsController);

  tournamentsController.$inject = ['$state', '$scope', 'eventsService'];

  function tournamentsController($state, $scope, eventsService) {
    var vm = this;
    vm.page = 1;
    vm.pageSize = 10;

    vm.title = 'Tournaments';

    activate();
    $scope.$watchGroup(['vm.page'], activate);

    function activate() {
      eventsService.getTournaments(null, vm.page, vm.pageSize).then(function(result) {
        vm.tournaments = result.events;
        vm.count = result.count;
      });
    }
  }
})();
