(function() {
  'use strict';

  angular
    .module('future150')
     .controller('alumniController', alumniController);

  alumniController.$inject = ['$scope'];

  function alumniController($scope) {
    var vm = this;


$scope.addalumni=function(val){

        $scope.alumnitab = val;
        alert("inside addalumni");
        console.log("inside addalumni");


    if($scope.alumnitab==1) {
        alert("inside alumnitab");
        $scope.alumnilist=true;
        $scope.addalumnilist=false;
        $scope.editalumni=false;

    }
    if($scope.alumnitab==2) {

        $scope.alumnilist=false;
        $scope.addalumnilist=true;
        $scope.editalumni=false;

    }
    else if($scope.alumnitab==3) {
        $scope.alumnilist=false;
        $scope.addalumnilist=false;
        $scope.editalumni=true;
    }
}

$scope.addalumni(1);
  }
})();




