var siteConfig = require('../../config/site'),
  RSS = require('rss'),
  sm = require('sitemap');

var SiteController = function() {
  return {
    feed: feed,
    sitemap: sitemap
  };

  function feed(req, res) {
    var feed = new RSS({
      title: 'Future150',
      description: siteConfig.description,
      feed_url: req.url,
      site_url: siteConfig.url
    });
    res.set('Content-Type', 'application/rss+xml');
    res.send(feed.xml());
  }

  function sitemap(req, res) {
    var sitemap = sm.createSitemap({
      hostname: siteConfig.url,
      cacheTime: 600000
    });
    sitemap.add({ url: '/' });
    sitemap.add({ url: '/camps' });
    sitemap.add({ url: '/tournaments' });
    sitemap.add({ url: '/shop' });
    sitemap.add({ url: '/contact-us' });
    sitemap.toXML(function (err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    });
  }
};

module.exports = SiteController;
