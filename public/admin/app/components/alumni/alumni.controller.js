(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('alumniController', alumniController);

  alumniController.$inject = ['$stateParams', '$state', 'alumniService'];

  function alumniController($stateParams, $state, alumniService) {
    var vm = this;
    vm.ent = ent;

    alumniService.getById($stateParams.id).then(function(alumni) {
      vm.alumni = alumni;
    });

    function ent(alumni) {
      alumniService.ent(alumni).then(function() {
        $state.go('alumni');
      });
    }
  }
})();
