(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('merchandiseController', merchandiseController);

  merchandiseController.$inject = ['$scope', 'merchandiseService', '$state'];

  function merchandiseController($scope, merchandiseService, $state) {

    activate();

    function activate() {
      merchandiseService.getAll().then(function(result) {
        $scope.contents = result.merchandises;
        console.log(result.merchandises);
      });
    }
  }
})();
