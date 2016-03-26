(function() {
  'use strict';

  angular
    .module('future150')
    .controller('videosController', videosController);

  videosController.$inject = ['$rootScope', '$scope', 'videosService'];

  function videosController($rootScope, $scope, videosService) {
    var vm = this;
    vm.page = 1;
    vm.pageSize = 10;

    $rootScope.title = 'Videos';
    $rootScope.description = '';

    activate();
    $scope.$watchGroup(['vm.page'], activate);

    function activate() {
      videosService.getAll(null, null, vm.page, vm.pageSize).then(function(result) {
        vm.videos = result.videos;
        vm.count = result.count;
      });
    }
  }
})();
