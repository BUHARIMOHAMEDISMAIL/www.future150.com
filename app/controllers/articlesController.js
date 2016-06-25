var Q = require('q');

var ArticlesController = function(articleDataService) {
  return {
    getArticles: getArticles,
    getArticleById: getArticleById,
    getArticleByLegacyId: getArticleByLegacyId,
    getArticleBySlug: getArticleBySlug,
    addArticle: addArticle,
    updateArticle: updateArticle
  };

  function getArticles(req, res) {
    var filter = {},
      page = (req.query.page - 1) || 0,
      pageSize = req.query.pageSize || 10;
    if (req.query.site) {
      filter.site = req.query.site;
    }
    var promises = [];
    promises.push(articleDataService.getAll(filter, page, pageSize));
    promises.push(articleDataService.getCount(filter));
    return Q.spread(promises, function(articles, count) {
      res.json({
        articles: articles,
        count: count
      });
    });
  }

  function getArticleById(req, res) {
    return articleDataService.getById(req.params.id).then(function(article) {
      res.json(article);
    });
  }

  function getArticleByLegacyId(req, res) {
    return articleDataService.getByLegacyId(req.params.legacyId).then(function(article) {
      res.json(article);
    });
  }

  function getArticleBySlug(req, res) {
    return articleDataService.getBySlug(req.params.slug).then(function(article) {
      res.json(article);
    });
  }

  function addArticle(req, res) {
    return articleDataService.add(req.body).then(function() {
      res.sendStatus(201);
    });
  }

  function updateArticle(req, res) {
    return articleDataService.update(req.params.id, req.body).then(function() {
      res.sendStatus(204);
    });
  }
};

module.exports = ArticlesController;
