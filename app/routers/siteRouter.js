var SiteRouter = function(siteController) {
  var express = require('express'),
    router = express.Router();

  router.get('/feed.xml', siteController.feed);

  router.get('/sitemap.xml', siteController.sitemap);

  return router;
};

module.exports = SiteRouter;
