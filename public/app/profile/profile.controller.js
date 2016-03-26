(function() {
  'use strict';

  angular
    .module('future150')
    .controller('profileController', profileController);

  profileController.$inject = ['$state', 'playersService'];

  function profileController($state, playersService) {
    var vm = this;

    if ($state.params.slug) {
      playersService.getBySlug($state.params.slug).then(function(player) {
        player.views = 180;
        player.likes = 20;
        player.followers = 10;
        player.shares = 60;
        vm.player = player;
      });
    }
  }
})();
