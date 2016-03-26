(function() {
  'use strict';

  angular
    .module('future150')
    .controller('topNavigationController', topNavigationController);

  topNavigationController.$inject = ['$scope', '$state', 'authenticationService', 'sites'];

  function topNavigationController($scope, $state, authenticationService, sites) {
    var vm = this;
    vm.sites = sites;
    vm.logout = logout;

    $scope.$watch(authenticationService.isAuthenticated, function(newValue, oldValue) {
      vm.user = authenticationService.getCurrentUser();
    });

    function logout() {
      authenticationService.logout();
      $state.go('site.home');
    }
  }
})();
