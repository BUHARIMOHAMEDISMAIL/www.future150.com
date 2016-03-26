(function() {
  'use strict';

  angular
    .module('future150')
    .controller('collegesController', collegesController);

  collegesController.$inject = ['$rootScope', '$scope', 'collegesService'];

  function collegesController($rootScope, $scope, collegesService) {
    var vm = this;
    vm.page = 1;
    vm.pageSize = 10;

    $rootScope.title = 'Colleges';
    $rootScope.description = '';

    activate();
    $scope.$watchGroup(['vm.page'], activate);

    function activate() {
      collegesService.getAll(null, vm.page, vm.pageSize).then(function(result) {
        vm.colleges = result.colleges;
        vm.count = result.count;
      });
    }
  }
})();
