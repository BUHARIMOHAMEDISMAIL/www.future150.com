(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('contactController', contactController);

  contactController.$inject = ['$stateParams', '$state', 'contactsService'];

  function contactController($stateParams, $state, contactsService) {
    var vm = this;
    vm.save = save;

    contactsService.getById($stateParams.id).then(function(contact) {
      contact.profileImageUrl = contact.profileImageUrl || '/assets/img/profile.png';
      vm.contact = contact;
    });

    function save(contact) {
      contactsService.save(contact).then(function() {
        $state.go('contacts');
      });
    }
  }
})();
