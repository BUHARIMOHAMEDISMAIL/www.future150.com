(function() {
  'use strict';
      angular.module('future150Admin')
    .controller('alumniController', function($scope, alumniService, $stateParams, $state) {
    $scope.alumniadd = "Add Alumni";
    $scope.listalumni = "Alumni List";
    $scope.alumnihead = $scope.listalumni;
    $scope.listalumniview = true;
    $scope.addalumni = function(val, item) {
        $scope.alumnitab = val;
if($scope.alumnitab==1){
    $scope.alumnihead= $scope.alumniadd;
    console.log($scope.alumniadd);
    $scope.addalumniview=true;
    $scope.listalumniview=false;
}else if($scope.alumnitab==2){
    $scope.alumnihead=$scope.listalumni;
    console.log($scope.listalumni);
    $scope.addalumniview=false;
    $scope.listalumniview=true;
}
}
$scope.editalumni=function(val, item) {
    $scope.alumni = {name:item.name, bio:item.bio, city:item.city, id:item._id, state:item.state, camp:item.camp, college:item.college, class:item.class, imageUrl:item.imageUrl}
    $scope.addalumniview=true;
    $scope.listalumniview=false;
    $scope.alumnihead ="Edit Alumni";
}
      $scope.submit = function(alumni) {
        $scope.enter = alumni;
        alumniService.save(alumni).then(function() {
        $state.go('dashboard');
      });
      };
    activate();
    function activate() {
      alumniService.getAll().then(function(result) {
        $scope.contents = result.alumnilists;
        console.log(result.alumnilists);

      });
    }
    });

})();
