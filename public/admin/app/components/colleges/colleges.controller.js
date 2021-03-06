(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('collegesController', collegesController);

  collegesController.$inject = ['$scope', 'collegesService'];

  function collegesController($scope, collegesService) {
    var vm = this;
    vm.q = '';
    vm.page = 1;
    vm.pageSize = 10;

    activate();
    $scope.$watchGroup(['vm.q', 'vm.page'], activate);

    function activate() {
      collegesService.getAll(vm.q, vm.page, vm.pageSize).then(function(result) {
        vm.colleges = result.colleges;
        vm.count = result.count;
        vm.start = (vm.page - 1) * vm.pageSize + 1;
        vm.end = (vm.start + vm.pageSize < result.count) ? (vm.page - 1) * vm.pageSize + vm.pageSize : result.count;
      });
    }
  }
})();
