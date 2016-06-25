(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('tournamentController', tournamentController);

  tournamentController.$inject = ['$stateParams', '$state', 'tournamentsService'];

  function tournamentController($stateParams, $state, tournamentsService) {
    var vm = this;
    vm.save = save;

    tournamentsService.getById($stateParams.id).then(function(tournament) {
      vm.tournament = tournament;
    });

    function save(tournament) {
      tournamentsService.save(tournament).then(function() {
        $state.go('tournaments');
      });
    }
  }
})();
