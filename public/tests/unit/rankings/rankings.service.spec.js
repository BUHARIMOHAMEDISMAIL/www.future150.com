describe('rankingsService', function() {
  beforeEach(module('future150'));

  var rankingsService,
    $httpBackend,
    mockRankingsResult = {
      count: 2
    },
    mockRankingResult = {};

  beforeEach(inject(function(_rankingsService_, _$httpBackend_) {
    rankingsService = _rankingsService_;
    $httpBackend = _$httpBackend_;

    $httpBackend.whenGET('//future150.herokuapp.com/rankings/national?site=hs').respond(mockRankingsResult);
    $httpBackend.whenGET('//future150.herokuapp.com/rankings/1234').respond(mockRankingResult);
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(rankingsService).toBeDefined();
  });

  describe('getAll', function() {
    it('should be defined', function() {
      expect(rankingsService.getAll).toBeDefined();
    });

    it('should return correct count', function() {
      rankingsService.getAll('national', 'hs').then(function(rankingsResult) {
        expect(rankingsResult.count).toEqual(2);
      });
      $httpBackend.flush();
    });
  });

  describe('getById', function() {
    it('should be defined', function() {
      expect(rankingsService.getById).toBeDefined();
    });

    it('should return correct object', function() {
      rankingsService.getById('1234').then(function(rankingsResult) {
        expect(rankingsResult).toEqual({});
      });
      $httpBackend.flush();
    });
  });
});
