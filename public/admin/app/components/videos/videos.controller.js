(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('videosController', videosController);

  videosController.$inject = ['$scope', 'videosService'];

  function videosController($scope, videosService) {
    var vm = this;
    vm.q = '';
    vm.page = 1;
    vm.pageSize = 10;

    activate();
    $scope.$watchGroup(['vm.q', 'vm.page'], activate);

    function activate() {
      videosService.getAll(vm.q, vm.page, vm.pageSize).then(function(result) {
        vm.videos = result.videos;
        vm.count = result.count;
      });
    }
  }
})();
