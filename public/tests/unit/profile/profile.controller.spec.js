describe('profileController', function() {
  beforeEach(module('future150'));

  var $scope,
    $controller,
    profileController,
    mockPlayersService,
    playersServiceGetBySlugStub,
    testPlayer,
    $httpBackend;

  beforeEach(inject(function(_$controller_,
      _$rootScope_,
      _$q_,
      _$httpBackend_) {
    $controller = _$controller_;
    $scope = _$rootScope_.$new();
    $httpBackend = _$httpBackend_;

    var mockState = {
      params: {
        slug: 'test-player'
      }
    };

    mockPlayersService = {
      getBySlug: function() {}
    };

    testPlayer = {
      firstName: 'Test',
      lastName: 'Player',
      notes: [],
      videos: []
    };

    playersServiceGetBySlugStub = sinon.stub(mockPlayersService, 'getBySlug')
      .returns(_$q_.resolve(testPlayer));

    profileController = $controller('profileController', {
      $state: mockState,
      playersService: mockPlayersService
    });
    $scope.$apply();
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(profileController).toBeDefined();
  });

  it('should call getBySlug method of playersService with correct params', function() {
    expect(playersServiceGetBySlugStub).toHaveBeenCalledWith('test-player');
  });

  it('should have correct player', function() {
    expect(profileController.player).toBe(testPlayer);
  });
});
