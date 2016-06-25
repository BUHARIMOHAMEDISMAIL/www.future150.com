var Article = require('../models/article');

var ArticleDataService = function() {
  return {
    getAll: getAll,
    getCount: getCount,
    getById: getById,
    getByLegacyId: getByLegacyId,
    getBySlug: getBySlug,
    add: add,
    update: update
  };

  function getAll(filter, page, pageSize) {
    return Article.find(filter)
      .sort('-createdDate')
      .skip(page * pageSize)
      .limit(pageSize)
      .exec();
  }

  function getCount(filter) {
    return Article.count(filter)
      .exec();
  }

  function getById(id) {
    return Article.findById(id)
      .exec();
  }

  function getByLegacyId(legacyId) {
    return Article.findOne({ legacyId: legacyId })
      .exec();
  }

  function getBySlug(slug) {
    return Article.findOne({ slug: slug })
      .exec();
  }

  function add(articleToAdd) {
    var article = new Article(articleToAdd);

    return article.save();
  }

  function update(id, article) {
    return Article.findByIdAndUpdate(id, article)
      .exec();
  }
};

module.exports = ArticleDataService;
