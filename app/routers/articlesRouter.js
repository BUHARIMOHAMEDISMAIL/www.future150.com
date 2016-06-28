var ArticlesRouter = function(articlesController) {
  var express = require('express'),
    router = express.Router();

  router.get('/articles', articlesController.getArticles);

  router.get('/articles/:id([0-9a-f]{24})', articlesController.getArticleById);

  router.get('/articles/:legacyId([0-9]+)', articlesController.getArticleByLegacyId);

  router.get('/articles/:slug', articlesController.getArticleBySlug);

  router.post('/articles', articlesController.addArticle);

  router.put('/articles/:id', articlesController.updateArticle);

  return router;
};

module.exports = ArticlesRouter;
