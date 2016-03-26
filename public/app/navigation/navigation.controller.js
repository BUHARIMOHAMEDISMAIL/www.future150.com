(function() {
  'use strict';

  angular
    .module('future150')
    .controller('navigationController', navigationController);

  navigationController.$inject = ['$state', 'eventsService', 'sites'];

  function navigationController($state, eventsService, sites) {
    var vm = this;
    vm.sites = sites;
    vm.search = search;
    activate();

    function activate() {
      eventsService.getCamps().then(function(result) {
        vm.campsCount = result.count;
      });
      eventsService.getTournaments().then(function(result) {
        vm.tournamentsCount = result.count;
      });
    }

    function search(q) {
      $state.go('search', { q: q });
    }
  }
})();
