(function() {
  'use strict';

  angular
    .module('future150Admin')
    .run(authenticate);

  authenticate.$inject = ['$rootScope', '$state', 'authenticationService'];

  function authenticate($rootScope, $state, authenticationService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (toState.authenticate && !authenticationService.isAuthenticated()) {
        $state.go('login');
        event.preventDefault();
      }
    });
  }
})();
