(function() {
  'use strict';

  angular
    .module('future150')
    .factory('articlesService', articlesService);

  articlesService.$inject = ['$http', 'config'];

  function articlesService($http, config) {
    var service = {
      getAll: getAll,
      getFeaturedArticle: getFeaturedArticle,
      getHighlighedArticles: getHighlighedArticles,
      getBySlug: getBySlug
    };
    return service;

    function getAll(site, q, page, pageSize) {
      var params = {
        site: site,
        q: q,
        page: page,
        pageSize: pageSize
      };
      return $http.get(config.baseApiUrl + '/articles', { params: params }).then(function(result) {
        return result.data;
      });
    }

    function getFeaturedArticle(site) {
      return getAll(site, null, 1, 1).then(function(result) {
        return {
          featuredArticle: result.articles[0]
        };
      });
    }

    function getHighlighedArticles(site) {
      return getAll(site, null, 1, 4).then(function(result) {
        return {
          highlighedArticles: result.articles
        };
      });
    }

    function getBySlug(slug) {
      return $http.get(config.baseApiUrl + '/articles/' + slug).then(function(result) {
        return result.data;
      });
    }
  }
})();
