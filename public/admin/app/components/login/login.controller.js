(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('loginController', loginController);

  loginController.$inject = ['$state', 'authenticationService'];

  function loginController($state, authenticationService) {
    var vm = this;
    vm.login = login;

    function login(user) {
      authenticationService.login(user).then(function() {
        $state.go('dashboard');
      });
    }
  }
})();
