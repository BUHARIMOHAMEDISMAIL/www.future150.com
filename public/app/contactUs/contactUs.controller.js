(function() {
  'use strict';

  angular
    .module('future150')
    .controller('contactUsController', contactUsController);

  contactUsController.$inject = ['$rootScope', 'contactsService'];

  function contactUsController($rootScope, contactsService) {
    var vm = this;

    $rootScope.title = 'Contact Us';
    $rootScope.description = 'Contact Future150 to send feedback, submit information or request information. Media contact information is provided.';

    contactsService.getAll().then(function(result) {
      vm.contacts = result.contacts;
    });
  }
})();
