describe('articlesService', function() {
  beforeEach(module('future150'));

  var articlesService,
    $httpBackend,
    mockArticleResult = {
      count: 2,
      articles: [
        {},
        {}
      ]
    };

  beforeEach(inject(function(_articlesService_,
      _$httpBackend_) {
    articlesService = _articlesService_;
    $httpBackend = _$httpBackend_;

    $httpBackend.whenGET('/articles').respond(mockArticleResult);
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(articlesService).toBeDefined();
  });

  describe('getAll', function() {
    it('should return count of 2', function() {
      articlesService.getAll().then(function(articlesResult) {
        expect(articlesResult.count).toEqual(2);
      });
      $httpBackend.flush();
    });
    it('should return 2 articles', function() {
      articlesService.getAll().then(function(articlesResult) {
        expect(articlesResult.articles.length).toEqual(2);
      });
      $httpBackend.flush();
    });
  });

  describe('getBySlug', function() {
    it('should be defined', function() {
      expect(articlesService.getBySlug).toBeDefined();
    });
  });
});
