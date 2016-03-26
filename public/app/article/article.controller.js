(function() {
  'use strict';

  angular
    .module('future150')
    .controller('articleController', articleController);

  articleController.$inject = ['$state', '$rootScope', '$sce', 'articlesService'];

  function articleController($state, $rootScope, $sce, articlesService) {
    var vm = this;

    if ($state.params.slug) {
      articlesService.getBySlug($state.params.slug).then(function(article) {
        $rootScope.title = article.title;
        $rootScope.description = article.description;
        $rootScope.featuredImageUrl = article.imageUrl;

        article.body = $sce.trustAsHtml(article.body);
        vm.article = article;
      });
    }
  }
})();
