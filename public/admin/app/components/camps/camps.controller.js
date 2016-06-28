(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('campsController', campsController);

  campsController.$inject = ['$scope', 'campsService'];

  function campsController($scope, campsService) {
    var vm = this;
    vm.q = '';
    vm.page = 1;
    vm.pageSize = 10;

    activate();
    $scope.$watchGroup(['vm.q', 'vm.page'], activate);

    function activate() {
      campsService.getAll(vm.q, vm.page, vm.pageSize).then(function(result) {
        vm.camps = result.camps;
        vm.count = result.count;
      });
    }
  }
})();
