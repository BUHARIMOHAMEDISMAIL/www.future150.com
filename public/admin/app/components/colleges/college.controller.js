(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('collegeController', collegeController);

  collegeController.$inject = ['$stateParams', '$state', 'collegesService'];

  function collegeController($stateParams, $state, collegesService) {
    var vm = this;
    vm.save = save;

    collegesService.getById($stateParams.id).then(function(college) {
      vm.college = college;
    });

    function save(college) {
      collegesService.save(college).then(function() {
        $state.go('colleges');
      });
    }
  }
})();
