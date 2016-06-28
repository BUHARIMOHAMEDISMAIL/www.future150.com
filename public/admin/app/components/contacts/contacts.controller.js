(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('contactsController', contactsController);

  contactsController.$inject = ['$scope', 'contactsService'];

  function contactsController($scope, contactsService) {
    var vm = this;
    vm.q = '';
    vm.page = 1;
    vm.pageSize = 10;

    activate();
    $scope.$watchGroup(['vm.q', 'vm.page'], activate);

    function activate() {
      contactsService.getAll(vm.q, vm.page, vm.pageSize).then(function(result) {
        vm.contacts = result.contacts;
        vm.count = result.count;
      });
    }
  }
})();
