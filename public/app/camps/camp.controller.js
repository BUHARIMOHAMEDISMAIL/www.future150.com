(function() {
  'use strict';

  angular
    .module('future150')
    .controller('campController', campController);

  campController.$inject = ['$state', '$sce', 'eventsService'];

  function campController($state, $sce, eventsService) {
    var vm = this;

    if ($state.params.slug) {
      eventsService.getBySlug($state.params.slug).then(function(camp) {
        camp.description = $sce.trustAsHtml(camp.description);
        vm.camp = camp;
      });
    }
  }
})();
