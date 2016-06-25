var ArticlesController = require('../../../app/controllers/articlesController'),
  ArticleDataService = require('../../../app/services/articleDataService'),
  MockRequest = require('../../mocks/mockRequest'),
  MockResponse = require('../../mocks/mockResponse'),
  Q = require('q');

describe('Articles Controller', function() {
  var articleDataService = {
      getAll: function() {},
      getCount: function() {}
    },
    articlesController = new ArticlesController(articleDataService);
  it('should be defined', function() {
    expect(articlesController).toBeDefined();
  });
  describe('getArticles', function() {
    it('should be defined', function() {
      expect(articlesController.getArticles).toBeDefined();
    });
    it('should call getAll function of articleDataService with correct parameters', function(done) {
      var articleDataServiceGetAllSpy = spyOn(articleDataService, 'getAll').andReturn(Q()),
        request = new MockRequest(),
        response = new MockResponse();

      articlesController.getArticles(request, response).then(function() {
        expect(articleDataServiceGetAllSpy).toHaveBeenCalledWith({}, 0, 10);
        done();
      });
    });
    it('should call getCount function of articleDataService with correct parameters', function(done) {
      var articleDataServiceGetCountSpy = spyOn(articleDataService, 'getCount').andReturn(Q()),
        request = new MockRequest(),
        response = new MockResponse();

      articlesController.getArticles(request, response).then(function() {
        expect(articleDataServiceGetCountSpy).toHaveBeenCalledWith({});
        done();
      });
    });
    it('should return correct json object', function(done) {
      spyOn(articleDataService, 'getAll').andReturn(Q([]));
      spyOn(articleDataService, 'getCount').andReturn(Q(2));
      var request = new MockRequest(),
        response = new MockResponse();

      var articlesResult = {
        articles: [],
        count: 2
      };
      articlesController.getArticles(request, response).then(function() {
        expect(response.getJsonResult()).toEqual(articlesResult);
        done();
      });
    });
  });
});
