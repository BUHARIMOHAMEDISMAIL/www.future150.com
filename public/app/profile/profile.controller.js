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
        player.colleges.forEach(function(collegeInterest) {
          collegeInterest.isHot = (collegeInterest.levelOfInterest == 'Favorite' ||
            collegeInterest.levelOfInterest == 'Hot');
          collegeInterest.isWarm = (collegeInterest.levelOfInterest == 'Warmer' ||
            collegeInterest.levelOfInterest == 'Warm');
          collegeInterest.isCold = (collegeInterest.levelOfInterest == 'Cold');
        });
        player.notes.forEach(function(note) {
          note.noteHtml = $sce.trustAsHtml(note.note);
        });
        player.videos.forEach(function(video) {
          video.videoUrl = $sce.trustAsResourceUrl(video.videoUrl);
        });
        vm.player = player;
      });
    }
  }
})();
