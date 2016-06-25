var Article = require('../../../app/models/article');

describe('Article', function() {
  var article;

  beforeEach(function() {
    article = new Article({
      slug: 'zach-is-a-baller',
      description: 'Zach is a Baller'
    });
  });

  it('should be defined', function() {
    expect(article).toBeDefined();
  });

  describe('slug', function() {
    it('should be defined', function() {
      expect(article.slug).toBeDefined();
    });

    it('should equal zach-is-a-baller', function() {
      expect(article.slug).toEqual('zach-is-a-baller');
    });
  });

  describe('description', function() {
    it('should be defined', function() {
      expect(article.description).toBeDefined();
    });

    it('should equal Zach is a Baller', function() {
      expect(article.description).toEqual('Zach is a Baller');
    });
  });
});
