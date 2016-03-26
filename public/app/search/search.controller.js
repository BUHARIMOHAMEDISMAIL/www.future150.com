(function () {
  'use strict';

  angular
    .module('future150')
    .controller('searchController', searchController);

  searchController.$inject = ['$rootScope', '$scope', '$stateParams', 'config', 'playersService'];

  function searchController($rootScope, $scope, $stateParams, config, playersService) {
    var vm = this;
    vm.page = 1;
    vm.pageSize = 10;
    vm.q = $stateParams.q;

    $rootScope.title = 'Search';
    $rootScope.description = '';

    activate();
    $scope.$watchGroup(['vm.page'], activate);

    function activate() {
      vm.isLoading = true;
      playersService.getAll($stateParams.q, vm.page, vm.pageSize).then(function(result) {
        if (result.players) {
          result.players.forEach(function(player) {
            player.imageUrl = player.imageUrl || config.defaultProfileImageUrl;
          });
        }
        vm.players = result.players;
        vm.count = result.count;
        vm.isLoading = false;
      });
    }
  }
})();
