(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('usersController', usersController);

  usersController.$inject = ['$scope', 'usersService'];

  function usersController($scope, usersService) {
    var vm = this;
    vm.q = '';
    vm.page = 1;
    vm.pageSize = 10;

    activate();
    $scope.$watchGroup(['vm.q', 'vm.page'], activate);

    function activate() {
      usersService.getAll(vm.q, vm.page, vm.pageSize).then(function(result) {
        vm.users = result.users;
        vm.count = result.count;
      });
    }
  }
})();
