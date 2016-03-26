(function() {
  'use strict';

  angular
    .module('future150')
    .controller('tournamentController', tournamentController);

  tournamentController.$inject = ['$state', '$sce', 'eventsService'];

  function tournamentController($state, $sce, eventsService) {
    var vm = this;

    if ($state.params.slug) {
      eventsService.getBySlug($state.params.slug).then(function(tournament) {
        tournament.description = $sce.trustAsHtml(tournament.description);
        vm.tournament = tournament;
      });
    }
  }
})();
