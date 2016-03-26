(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('nationalRankingController', nationalRankingController);

  nationalRankingController.$inject = ['$stateParams', '$state', 'config', 'rankingsService', 'playersService'];

  function nationalRankingController($stateParams, $state, config, rankingsService, playersService) {
    var vm = this;
    vm.save = save;
    vm.refreshPlayers = refreshPlayers;
    vm.add = add;
    vm.remove = remove;
    vm.sortableOptions = {
      stop: update,
      items: '.list-group-item:not(.unsortable)',
      cursor: 'move'
    };
    vm.rankYears = [];
    for (var i = config.currentRankingYear; i <= config.lastRankingYear; i++) {
      vm.rankYears.push(i);
    }
    var nextRanking = 1;

    activate();

    function activate() {
      rankingsService.getById($stateParams.id).then(function(ranking) {
        vm.ranking = ranking;
        nextRanking = ranking.players.length + 1;
      });
    }

    function save(ranking) {
      rankingsService.save(ranking).then(function() {
        $state.go('nationalRankings');
      });
    }

    function refreshPlayers(q) {
      playersService.getAll(q).then(function(result) {
        vm.players = result.players;
      });
    }

    function add(player) {
      var playerRanking = {
        rank: nextRanking,
        player: player
      };
      vm.ranking.players.push(playerRanking);
      nextRanking = nextRanking + 1;
    }

    function remove(player) {
      var indexToRemove = vm.ranking.players.indexOf(player);
      vm.ranking.players.splice(indexToRemove, 1);
      nextRanking = nextRanking - 1;
    }

    function update() {
      vm.ranking.players.forEach(function (playerRanking, i) {
        playerRanking.rank = i + 1;
        return playerRanking;
      });
    }
  }
})();
