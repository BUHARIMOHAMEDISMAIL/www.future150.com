describe('articlesService', function() {
  beforeEach(module('future150Admin'));

  var articlesService,
    httpBackend,
    mockArticlesResponse,
    mockArticleResponse;

  beforeEach(inject(function(_articlesService_,
      _$httpBackend_) {
    articlesService = _articlesService_;
    httpBackend = _$httpBackend_;
    mockArticlesResponse = {};
    mockArticleResponse = {};
  }));

  it('should be defined', function() {
    expect(articlesService).toBeDefined();
  });

  describe('getAll', function() {
    it('should be defined', function() {
      expect(articlesService.getAll).toBeDefined();
    });
    it('should return the correct result without parameters', function() {
      httpBackend.whenGET('//future150.herokuapp.com/articles').respond(mockArticlesResponse);
      articlesService.getAll().then(function(result) {
        expect(result).toEqual(mockArticlesResponse);
      });
      httpBackend.flush();
    });
    it('should return the correct result with parameters', function() {
      httpBackend.whenGET('//future150.herokuapp.com/articles?page=3&pageSize=10&q=test').respond(mockArticlesResponse);
      articlesService.getAll('test', 3, 10).then(function(result) {
        expect(result).toEqual(mockArticlesResponse);
      });
      httpBackend.flush();
    });
  });

  describe('getById', function() {
    it('should be defined', function() {
      expect(articlesService.getById).toBeDefined();
    });
    it('should return the correct article', function() {
      httpBackend.whenGET('//future150.herokuapp.com/articles/123').respond(mockArticleResponse);
      articlesService.getById(123).then(function(article) {
        expect(article).toEqual(mockArticleResponse);
      });
      httpBackend.flush();
    });
  });

  describe('save', function() {
    it('should be defined', function() {
      expect(articlesService.save).toBeDefined();
    });
    it('should make post request to /articles', function() {
      httpBackend.expectPOST('//future150.herokuapp.com/articles').respond(201);
      articlesService.save({});
      httpBackend.flush();
    });
    it('should make put request to /articles/123', function() {
      httpBackend.expectPUT('//future150.herokuapp.com/articles/123').respond(204);
      articlesService.save({ _id: 123 });
      httpBackend.flush();
    });
  });

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });
});
