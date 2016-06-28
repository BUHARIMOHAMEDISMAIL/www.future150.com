(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('userController', userController);

  userController.$inject = ['$stateParams', '$state', 'usersService'];

  function userController($stateParams, $state, usersService) {
    var vm = this;
    vm.save = save;

    activate();

    function activate() {
      usersService.getById($stateParams.id).then(function(user) {
        vm.user = user;
      });
    }

    function save(user) {
      usersService.save(user).then(function() {
        $state.go('users');
      });
    }
  }
})();
