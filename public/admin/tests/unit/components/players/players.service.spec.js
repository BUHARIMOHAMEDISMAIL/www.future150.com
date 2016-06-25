describe('playersService', function() {
  beforeEach(module('future150Admin'));

  var playersService,
    mockPlayerResult = {
      data: {
        count: 2,
        players: [
          {},
          {}
        ]
      }
    };

  beforeEach(inject(function(_playersService_,
      $httpBackend) {
    playersService = _playersService_;

    $httpBackend.whenGET('/players').respond(mockPlayerResult);
  }));

  it('should be defined', function() {
    expect(playersService).toBeDefined();
  });

  describe('getAll', function() {
    it('should return count of 2', function() {
      playersService.getAll().then(function(playersResult) {
        expect(playersResult.count).toEqual(2);
      });
    });
    it('should return 2 players', function() {
      playersService.getAll().then(function(playersResult) {
        expect(playersResult.players.length).toEqual(2);
      });
    });
  });
});
