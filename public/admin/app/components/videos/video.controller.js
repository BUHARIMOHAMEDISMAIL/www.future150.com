(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('videoController', videoController);

  videoController.$inject = ['$stateParams', '$state', 'videosService'];

  function videoController($stateParams, $state, videosService) {
    var vm = this;
    vm.save = save;

    videosService.getById($stateParams.id).then(function(video) {
      vm.video = video;
    });

    function save(video) {
      videosService.save(video).then(function() {
        $state.go('videos');
      });
    }
  }
})();
