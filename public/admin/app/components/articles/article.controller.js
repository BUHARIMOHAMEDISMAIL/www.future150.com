(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('articleController', articleController);

  articleController.$inject = ['$stateParams', '$state', 'articlesService'];

  function articleController($stateParams, $state, articlesService) {
    var vm = this;
    vm.save = save;

    if ($stateParams.id) {
      articlesService.getById($stateParams.id).then(function(article) {
        article.createdDate = article.createdDate || new Date();
        vm.article = article;
      });
    }

    function save(article) {
      articlesService.save(article).then(function() {
        $state.go('articles');
      });
    }
  }
})();
