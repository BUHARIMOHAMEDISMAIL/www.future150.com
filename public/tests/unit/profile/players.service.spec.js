describe('playersService', function() {
  beforeEach(module('future150'));

  var playersService,
    $httpBackend,
    mockPlayersResult = {
      count: 2,
      players: [
        {},
        {}
      ]
    },
    mockPlayerResult = {};

  beforeEach(inject(function(_playersService_, _$httpBackend_) {
    playersService = _playersService_;
    $httpBackend = _$httpBackend_;

    $httpBackend.whenGET('/players').respond(mockPlayersResult);
    $httpBackend.whenGET('/players/test-player').respond(mockPlayerResult);
    $httpBackend.whenGET('/players/trending?site=hs').respond(mockPlayersResult);
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(playersService).toBeDefined();
  });

  describe('getAll', function() {
    it('should be defined', function() {
      expect(playersService.getAll).toBeDefined();
    });

    it('should return correct count', function() {
      playersService.getAll().then(function(playersResult) {
        expect(playersResult.count).toEqual(2);
      });
      $httpBackend.flush();
    });
  });

  describe('getBySlug', function() {
    it('should be defined', function() {
      expect(playersService.getBySlug).toBeDefined();
    });

    it('should return correct object', function() {
      playersService.getBySlug('test-player').then(function(playerResult) {
        expect(playerResult).toEqual({});
      });
      $httpBackend.flush();
    });
  });

  describe('getTrendingPlayers', function() {
    it('should be defined', function() {
      expect(playersService.getTrendingPlayers).toBeDefined();
    });

    it('should return correct count', function() {
      playersService.getTrendingPlayers('hs').then(function(playersResult) {
        expect(playersResult.count).toEqual(2);
      });
      $httpBackend.flush();
    });
  });
});
