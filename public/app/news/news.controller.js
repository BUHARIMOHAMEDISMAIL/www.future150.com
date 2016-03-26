(function() {
  'use strict';

  angular
    .module('future150')
    .controller('newsController', newsController);

  newsController.$inject = ['$rootScope', '$scope', 'articlesService'];

  function newsController($rootScope, $scope, articlesService) {
    var vm = this;
    vm.page = 1;
    vm.pageSize = 10;

    $rootScope.title = 'Latest College Basketball Recruiting News from Future150';
    $rootScope.description = 'The latest basketball recruiting news from Future150. Covering the best high school basketball players across the nation as they become top college recruits.';

    activate();
    $scope.$watchGroup(['vm.page'], activate);

    function activate() {
      vm.isLoading = true;
      articlesService.getAll($rootScope.site, null, vm.page, vm.pageSize).then(function(result) {
        vm.articles = result.articles;
        vm.count = result.count;
        vm.isLoading = false;
      });
    }
  }
})();
