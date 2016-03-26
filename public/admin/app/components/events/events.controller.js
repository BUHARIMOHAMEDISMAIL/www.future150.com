(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('eventsController', eventsController);

  eventsController.$inject = ['$scope', 'eventsService'];

  function eventsController($scope, eventsService) {
    var vm = this;
    vm.q = '';
    vm.page = 1;
    vm.pageSize = 10;

    activate();
    $scope.$watchGroup(['vm.q', 'vm.page'], activate);

    function activate() {
      eventsService.getAll(vm.q, vm.page, vm.pageSize).then(function(result) {
        vm.events = result.events;
        vm.count = result.count;
      });
    }
  }
})();
