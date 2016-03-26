(function() {
  'use strict';

  angular
    .module('future150')
    .controller('messageBoardsController', messageBoardsController);

  messageBoardsController.$inject = ['$rootScope', '$scope', 'messageBoardsService'];

  function messageBoardsController($rootScope, $scope, messageBoardsService) {
    var vm = this;
    vm.page = 1;
    vm.pageSize = 10;

    $rootScope.title = 'Message Boards';
    $rootScope.description = '';

    activate();
    $scope.$watchGroup(['vm.page'], activate);

    function activate() {
      messageBoardsService.getAllThreads(null, vm.page, vm.pageSize).then(function(result) {
        vm.threads = result.messageBoardThreads;
        vm.count = result.count;
      });
    }
  }
})();
