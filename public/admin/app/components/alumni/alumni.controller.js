(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('alumniController', alumniController);

  campController.$inject = ['$stateParams', '$state', 'alumniService'];

  function campController($stateParams, $state, campsService) {
    var vm = this;
    vm.ent = ent;

    campsService.getById($stateParams.id).then(function(camp) {
      vm.camp = camp;
    });

    function ent(alumni) {
      alumniService.save(alumni).then(function() {
        $state.go('alumni');
      });
    }
  }
})();
