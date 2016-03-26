(function() {
  'use strict';

  angular
    .module('future150')
    .controller('buyProductController', buyProductController);

  buyProductController.$inject = ['$state', 'productsService'];

  function buyProductController($state, productsService) {
    var vm = this;

    if ($state.params.slug) {
      productsService.getBySlug($state.params.slug).then(function(product) {
        vm.product = product;
      });
    }
  }
})();
