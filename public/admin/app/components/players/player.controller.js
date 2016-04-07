(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('playerController', playerController);

  playerController.$inject = ['$stateParams', '$state', 'playersService', 'collegesService'];

  function playerController($stateParams, $state, playersService, collegesService) {
    var vm = this;
    vm.save = save;
    vm.addStat = addStat;
    vm.removeStat = removeStat;
    vm.addCollege = addCollege;
    vm.removeCollege = removeCollege;
    vm.loadStrengths = loadStrengths;
    vm.loadImprovements = loadImprovements;
    vm.newStat = {};
    vm.newCollege = {};

    activate();

    function activate() {
      playersService.getById($stateParams.id).then(function(player) {
        player.imageUrl = player.imageUrl || '/assets/img/profile.png';
        vm.player = player;
      });
      collegesService.getAll().then(function(result) {
        vm.colleges = result.colleges;
      });
    }

    function save(player) {
      player.strengths = player.strengths.map(function(strength) { return strength.text; });
      player.needsToImprove = player.needsToImprove.map(function(needToImprove) { return needToImprove.text; });
      playersService.save(player).then(function() {
        $state.go('players');
      });
    }

    function addStat(stat) {
      vm.player.stats.push(stat);
      vm.newStat = {};
    }

    function removeStat(stat) {
      vm.player.stats = _.without(vm.player.stats, _.findWhere(vm.player.stats, stat));
    }

    function addCollege(college) {
      vm.player.colleges.push(college);
      vm.newCollege = {};
    }

    function removeCollege(college) {
      vm.player.colleges = _.without(vm.player.colleges, _.findWhere(vm.player.colleges, college));
    }

    function loadStrengths() {
      return ['3pt Shooting', 'Agility'];
    }

    function loadImprovements() {
      return ['Playing Without the Ball', 'Transition Vision'];
    }
  }
})();
