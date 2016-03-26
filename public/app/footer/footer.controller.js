(function() {
  'use strict';

  angular
    .module('future150')
    .controller('footerController', footerController);

  footerController.$inject = ['articlesService'];

  function footerController(articlesService) {
    var vm = this;
    activate();

    function activate() {
      articlesService.getAll().then(function(result) {
        vm.latestArticles = result.articles;
      });
    }
  }
})();
