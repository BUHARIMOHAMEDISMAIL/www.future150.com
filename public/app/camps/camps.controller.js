(function() {
  'use strict';

  angular
    .module('future150')
    .controller('campsController', campsController);

  campsController.$inject = ['$state', '$scope', 'eventsService'];

  function campsController($state, $scope, eventsService) {
    var vm = this;
    vm.page = 1;
    vm.pageSize = 10;

    vm.title = 'Camps';

    activate();
    $scope.$watchGroup(['vm.page'], activate);

    function activate() {
      eventsService.getCamps(null, vm.page, vm.pageSize).then(function(result) {
        vm.camps = result.events;
        vm.count = result.count;
      });
    }
  }
})();
