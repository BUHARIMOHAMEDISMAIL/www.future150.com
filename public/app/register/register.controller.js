(function() {
  'use strict';

  angular
    .module('future150')
    .controller('registerController', registerController);

  registerController.$inject = ['$rootScope', '$state', 'authenticationService'];

  function registerController($rootScope, $state, authenticationService) {
    var vm = this;
    vm.register = register;

    $rootScope.title = 'Register';
    $rootScope.description = '';

    function register(user) {
      authenticationService.register(user).then(function() {
        $state.go('home');
      });
    }
  }
})();
