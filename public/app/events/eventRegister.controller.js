(function() {
  'use strict';

  angular
    .module('future150')
    .controller('eventRegisterController', eventRegisterController);

  eventRegisterController.$inject = ['$state', 'eventsService'];

  function eventRegisterController($state, eventsService) {
    var vm = this;

    if ($state.params.slug) {
      eventsService.getBySlug($state.params.slug).then(function(event) {
        vm.event = event;
      });
    }
  }
})();
