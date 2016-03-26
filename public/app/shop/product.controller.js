(function() {
  'use strict';

  angular
    .module('future150')
    .controller('productController', productController);

  productController.$inject = ['$state', 'productsService'];

  function productController($state, productsService) {
    var vm = this;

    if ($state.params.slug) {
      productsService.getBySlug($state.params.slug).then(function(product) {
        vm.product = product;
      });
    }
  }
})();
