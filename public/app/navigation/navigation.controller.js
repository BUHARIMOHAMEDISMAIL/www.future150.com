(function() {
  'use strict';

  angular
    .module('future150')
    .controller('navigationController', navigationController);

  navigationController.$inject = ['$state', 'campsService', 'tournamentsService', 'sites'];

  function navigationController($state, campsService, tournamentsService, sites) {
    var vm = this;
    vm.sites = sites;
    vm.search = search;
    activate();

    function activate() {
      campsService.getAll().then(function(result) {
        vm.campsCount = result.count;
      });
      tournamentsService.getAll().then(function(result) {
        vm.tournamentsCount = result.count;
      });
    }

    function search(q) {
      $state.go('search', { q: q });
    }
  }
})();
