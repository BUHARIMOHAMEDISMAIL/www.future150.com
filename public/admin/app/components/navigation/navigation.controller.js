(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('navigationController', navigationController);

  navigationController.$inject = ['$scope', '$state', 'authenticationService'];

  function navigationController($scope, $state, authenticationService) {
    var vm = this;
    vm.logout = logout;

    $scope.$watch(authenticationService.isAuthenticated, function(newValue, oldValue) {
      vm.user = authenticationService.getCurrentUser();
    });

    function logout() {
      authenticationService.logout();
      $state.go('login');
    }
  }
})();
