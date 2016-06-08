(function() {
  'use strict';

  angular
    .module('future150')
    .controller('campsController', campsController);

  campsController.$inject = ['$state', '$scope', 'campsService'];

  function campsController($state, $scope, campsService) {
    var vm = this;
    vm.page = 1;
    vm.pageSize = 10;

    vm.title = 'Camps';

    activate();
    $scope.$watchGroup(['vm.page'], activate);

    function activate() {
      campsService.getAll(null, vm.page, vm.pageSize).then(function(result) {
        vm.camps = result.camps;
        vm.count = result.count;
      });
    }
  }
})();
