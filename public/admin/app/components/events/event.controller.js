(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('eventController', eventController);

  eventController.$inject = ['$stateParams', '$state', 'eventsService'];

  function eventController($stateParams, $state, eventsService) {
    var vm = this;
    vm.save = save;

    eventsService.getById($stateParams.id).then(function(event) {
      vm.event = event;
    });

    function save(event) {
      eventsService.save(event).then(function() {
        $state.go('events');
      });
    }
  }
})();
