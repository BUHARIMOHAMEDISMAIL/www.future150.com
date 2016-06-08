(function() {
  'use strict';

  angular
    .module('future150')
    .controller('campRegisterController', campRegisterController);

  campRegisterController.$inject = ['$state', 'campsService'];

  function campRegisterController($state, campsService) {
    var vm = this;

    if ($state.params.slug) {
      campsService.getBySlug($state.params.slug).then(function(event) {
        vm.camp = camp;
      });
    }
  }
})();
