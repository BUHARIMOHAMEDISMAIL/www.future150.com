(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('profileController', profileController);

  profileController.$inject = ['$stateParams', '$state', 'authenticationService'];

  function profileController($stateParams, $state, authenticationService) {
    var vm = this;

    activate();

    function activate() {
      vm.user = authenticationService.getCurrentUser();
    }
  }
})();
