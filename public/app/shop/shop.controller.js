(function() {
  'use strict';

  angular
    .module('future150')
    .controller('shopController', shopController);

  shopController.$inject = ['$rootScope', '$scope', 'productsService'];

  function shopController($rootScope, $scope, productsService) {
    var vm = this;
    vm.page = 1;
    vm.pageSize = 10;

    $rootScope.title = 'Shop';
    $rootScope.description = 'Shop';

    activate();
    $scope.$watchGroup(['vm.page'], activate);

    function activate() {
      productsService.getAll(null, vm.page, vm.pageSize).then(function(result) {
        vm.products = result.products;
        vm.count = result.count;
      });
    }
  }
})();
