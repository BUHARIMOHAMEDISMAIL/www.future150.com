(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('playerController', playerController);

  playerController.$inject = ['$stateParams', '$state', 'playersService'];

  function playerController($stateParams, $state, playersService) {
    var vm = this;
    vm.save = save;

    activate();

    function activate() {
      playersService.getById($stateParams.id).then(function(player) {
        player.imageUrl = player.imageUrl || '/assets/img/profile.png';
        vm.player = player;
      });
    }

    function save(player) {
      playersService.save(player).then(function() {
        $state.go('players');
      });
    }
  }
})();
