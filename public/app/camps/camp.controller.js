(function() {
  'use strict';

  angular
    .module('future150')
    .controller('campController', campController);

  campController.$inject = ['$state', '$sce', 'campsService'];

  function campController($state, $sce, campsService) {
    var vm = this;

    if ($state.params.slug) {
      campsService.getBySlug($state.params.slug).then(function(camp) {
        camp.description = $sce.trustAsHtml(camp.description);
        vm.camp = camp;
      });
    }
  }
})();
