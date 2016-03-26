(function() {
  'use strict';

  angular
    .module('future150')
    .controller('threadController', threadController);

  threadController.$inject = ['$state', '$rootScope', 'messageBoardsService'];

  function threadController($state, $rootScope, messageBoardsService) {
    var vm = this;

    if ($state.params.slug) {
      messageBoardsService.getThreadBySlug($state.params.slug).then(function(thread) {
        $rootScope.title = thread.title;

        vm.thread = thread;
      });
    }
  }
})();
