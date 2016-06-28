(function() {
  'use strict';

  angular
    .module('future150')
    .controller('tournamentController', tournamentController);

  tournamentController.$inject = ['$state', '$sce', 'tournamentsService'];

  function tournamentController($state, $sce, tournamentsService) {
    var vm = this;

    if ($state.params.slug) {
      tournamentsService.getBySlug($state.params.slug).then(function(tournament) {
        tournament.description = $sce.trustAsHtml(tournament.description);
        vm.tournament = tournament;
      });
    }
  }
})();
