(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('campController', campController);

  campController.$inject = ['$stateParams', '$state', 'campsService'];

  function campController($stateParams, $state, campsService) {
    var vm = this;
    vm.save = save;

    campsService.getById($stateParams.id).then(function(camp) {
      vm.camp = camp;
    });

    function save(camp) {
      campsService.save(camp).then(function() {
        $state.go('camps');
      });
    }
  }
})();
