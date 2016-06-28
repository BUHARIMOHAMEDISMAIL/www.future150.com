(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('playerController', playerController);

  playerController.$inject = ['$stateParams', '$state', '$sce', 'playersService', 'collegesService', 'authenticationService'];

  function playerController($stateParams, $state, $sce, playersService, collegesService, authenticationService) {
    var vm = this;
    vm.save = save;
    vm.addCollege = addCollege;
    vm.removeCollege = removeCollege;
    vm.addNote = addNote;
    vm.removeNote = removeNote;
    vm.loadStrengths = loadStrengths;
    vm.loadImprovements = loadImprovements;
    vm.newNote = {
      createdDate: new Date(),
      author: authenticationService.getCurrentUser()
    };
    vm.newCollege = {};

    activate();

    function activate() {
      playersService.getById($stateParams.id).then(function(player) {
        player.imageUrl = player.imageUrl || '/assets/img/profile.png';
        player.notes.forEach(function(note) {
          note.noteHtml = $sce.trustAsHtml(note.note);
        });
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

    function addCollege(college) {
      vm.player.colleges.push(college);
      vm.newCollege = {};
    }

    function removeCollege(college) {
      vm.player.colleges = _.without(vm.player.colleges, _.findWhere(vm.player.colleges, college));
    }

    function addNote(note) {
      note.noteHtml = $sce.trustAsHtml(note.note);
      vm.player.notes.push(note);
      vm.newNote = {
        createdDate: new Date(),
        author: {}
      };
    }

    function removeNote(note) {
      vm.player.notes = _.without(vm.player.notes, _.findWhere(vm.player.notes, note));
    }

    function loadStrengths() {
      return ['3pt Shooting', 'Agility'];
    }

    function loadImprovements() {
      return ['Playing Without the Ball', 'Transition Vision'];
    }
  }
})();
