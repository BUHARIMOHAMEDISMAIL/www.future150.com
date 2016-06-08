(function() {
  'use strict';

  angular
    .module('future150')
    .controller('tournamentRegisterController', tournamentRegisterController);

  tournamentRegisterController.$inject = ['$state', 'tournamentsService'];

  function tournamentRegisterController($state, tournamentsService) {
    var vm = this;

    if ($state.params.slug) {
      tournamentsService.getBySlug($state.params.slug).then(function(tournament) {
        vm.tournament = tournament;
      });
    }
  }
})();
