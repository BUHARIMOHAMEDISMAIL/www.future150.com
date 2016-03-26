(function() {
  'use strict';

  angular
    .module('future150')
    .controller('loginController', loginController);

  loginController.$inject = ['$rootScope', '$state', 'authenticationService'];

  function loginController($rootScope, $state, authenticationService) {
    var vm = this;
    vm.login = login;

    $rootScope.title = 'Login';
    $rootScope.description = '';

    function login(user) {
      authenticationService.login(user).then(function() {
        $state.go('site.home');
      });
    }
  }
})();
