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
        // console.log(result.dummies._id);
        // vm.count = result.count;
        // vm.start = (vm.page - 1) * vm.pageSize + 1;
        // vm.end = (vm.start + vm.pageSize < result.count) ? (vm.page - 1) * vm.pageSize + vm.pageSize : result.count;
      });
    }


    // $scope.save = function(dummy) {
    //   console.log("inside save dummy function");
    //   dummiesService.save(dummy).then(function() {
    //     $state.go('dashboard');
    //   });
    // }
  }
})();
