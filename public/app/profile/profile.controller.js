(function() {
  'use strict';

  angular
    .module('future150')
    .controller('profileController', profileController);

  profileController.$inject = ['$state', '$sce', 'playersService'];

  function profileController($state, $sce, playersService) {
    var vm = this;

    if ($state.params.slug) {
      playersService.getBySlug($state.params.slug).then(function(player) {
        player.notes.forEach(function(note) {
          note.noteHtml = $sce.trustAsHtml(note.note);
        });
        vm.player = player;
      });
    }
  }
})();
