var ArticleDataService = require('../../../app/services/articleDataService'),
  Article = require('../../../app/models/article'),
  MockMongooseModel = require('../../mocks/mockMongooseModel');

describe('ArticleDataService', function() {
  var articleDataService;
  beforeEach(function() {
    articleDataService = new ArticleDataService();
  });
  it('should be defined', function() {
    expect(articleDataService).toBeDefined();
  });
  describe('getAll', function() {
    it('should be defined', function() {
      expect(articleDataService.getAll).toBeDefined();
    });
    it('should return correct articles', function(done) {
      var articleResult = [{}, {}, {}];
      var mockGetAllResult = new MockMongooseModel(articleResult);
      spyOn(Article, 'find').andReturn(mockGetAllResult);

      articleDataService.getAll().then(function(articles) {
        expect(articles).toBe(articleResult);
        done();
      });
    });
    it('should call find method of Article with correct parameters', function(done) {
      var mockGetAllResult = new MockMongooseModel();
      var articleFindSpy = spyOn(Article, 'find').andReturn(mockGetAllResult);

      articleDataService.getAll({ name: 'test' }).then(function() {
        expect(articleFindSpy).toHaveBeenCalledWith({ name: 'test' });
        done();
      });
    });
    it('should call sort method of Article with correct parameters', function(done) {
      var mockGetAllResult = new MockMongooseModel();
      spyOn(Article, 'find').andReturn(mockGetAllResult);
      var articleSortSpy = spyOn(mockGetAllResult, 'sort').andCallThrough();

      articleDataService.getAll().then(function() {
        expect(articleSortSpy).toHaveBeenCalledWith('-createdDate');
        done();
      });
    });
    it('should call skip method of Article with correct parameters', function(done) {
      var mockGetAllResult = new MockMongooseModel();
      spyOn(Article, 'find').andReturn(mockGetAllResult);
      var articleSkipSpy = spyOn(mockGetAllResult, 'skip').andCallThrough();

      articleDataService.getAll(null, 10, 25).then(function() {
        expect(articleSkipSpy).toHaveBeenCalledWith(250);
        done();
      });
    });
  });
  describe('getCount', function() {
    it('should be defined', function() {
      expect(articleDataService.getCount).toBeDefined();
    });
    it('should return correct count', function(done) {
      var mockCountResult = new MockMongooseModel(16);
      spyOn(Article, 'count').andReturn(mockCountResult);

      articleDataService.getCount().then(function(count) {
        expect(count).toBe(16);
        done();
      });
    });
    it('should call count method of Article with correct parameters', function(done) {
      var mockCountResult = new MockMongooseModel();
      var articleCountSpy = spyOn(Article, 'count').andReturn(mockCountResult);

      articleDataService.getCount({ name: 'test' }).then(function() {
        expect(articleCountSpy).toHaveBeenCalledWith({ name: 'test' });
        done();
      });
    });
  });
  describe('getById', function() {
    it('should be defined', function() {
      expect(articleDataService.getById).toBeDefined();
    });
    it('should return correct article', function(done) {
      var findByIdResult = {};
      var mockFindByIdResult = new MockMongooseModel(findByIdResult);
      spyOn(Article, 'findById').andReturn(mockFindByIdResult);

      articleDataService.getById(12).then(function(article) {
        expect(article).toBe(findByIdResult);
        done();
      });
    });
    it('should call findById method of Article with correct parameters', function(done) {
      var mockFindByIdResult = new MockMongooseModel();
      var articleFindByIdSpy = spyOn(Article, 'findById').andReturn(mockFindByIdResult);

      articleDataService.getById(12).then(function() {
        expect(articleFindByIdSpy).toHaveBeenCalledWith(12);
        done();
      });
    });
  });
  describe('getByLegacyId', function() {
    it('should be defined', function() {
      expect(articleDataService.getByLegacyId).toBeDefined();
    });
  });
  describe('getBySlug', function() {
    it('should be defined', function() {
      expect(articleDataService.getBySlug).toBeDefined();
    });
  });
  describe('add', function() {
    it('should be defined', function() {
      expect(articleDataService.add).toBeDefined();
    });
  });
  describe('update', function() {
    it('should be defined', function() {
      expect(articleDataService.update).toBeDefined();
    });
  });
});
