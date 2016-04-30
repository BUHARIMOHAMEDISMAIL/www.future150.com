describe('homeController', function() {
  beforeEach(module('future150'));

  var $controller,
    $rootScope,
    $scope,
    homeController,
    articlesServiceGetAllStub,
    rankingsServiceGetAllStub,
    eventsServiceGetAllStub,
    videosServiceGetAllStub,
    playersServiceGetTrendingPlayersStub;

  beforeEach(inject(function(_$controller_,
      _$rootScope_,
      _$q_) {
    $rootScope = _$rootScope_;
    $rootScope.site = 'hs';
    $scope = _$rootScope_.$new();
    $controller = _$controller_;

    var mockArticlesService = {
      getAll: function() {}
    };
    var mockRankingsService = {
      getAll: function() {}
    };
    var mockEventsService = {
      getAll: function() {}
    };
    var mockVideosService = {
      getAll: function() {}
    };
    var mockPlayersService = {
      getTrendingPlayers: function() {}
    };

    articlesServiceGetAllStub = sinon.stub(mockArticlesService, 'getAll')
      .returns(_$q_.resolve({}));
    rankingsServiceGetAllStub = sinon.stub(mockRankingsService, 'getAll')
      .returns(_$q_.resolve({}));
    eventsServiceGetAllStub = sinon.stub(mockEventsService, 'getAll')
      .returns(_$q_.resolve({}));
    videosServiceGetAllStub = sinon.stub(mockVideosService, 'getAll')
      .returns(_$q_.resolve({}));
    playersServiceGetTrendingPlayersStub = sinon.stub(mockPlayersService, 'getTrendingPlayers')
      .returns(_$q_.resolve({}));

    homeController = $controller('homeController', {
      articlesService: mockArticlesService,
      rankingsService: mockRankingsService,
      eventsService: mockEventsService,
      videosService: mockVideosService,
      playersService: mockPlayersService
    });
    $scope.$apply();
  }));

  it('should be defined', function() {
    expect(homeController).toBeDefined();
  });

  it('should call getAll method of articles service', function() {
    expect(articlesServiceGetAllStub).toHaveBeenCalledWith('hs');
  });

  it('should call getAll method of rankings service', function() {
    expect(rankingsServiceGetAllStub).toHaveBeenCalledWith('national', 'hs');
  });

  it('should call getAll method of events service', function() {
    expect(eventsServiceGetAllStub).toHaveBeenCalled();
  });

  describe('selectRankings', function() {
    it('should be defined', function() {
      expect(homeController.selectRankings).toBeDefined();
    });
  });

  describe('selectEvents', function() {
    it('should be defined', function() {
      expect(homeController.selectEvents).toBeDefined();
    });
  });

  describe('selectVideos', function() {
    it('should be defined', function() {
      expect(homeController.selectVideos).toBeDefined();
    });
  });

  describe('selectTrending', function() {
    it('should be defined', function() {
      expect(homeController.selectTrending).toBeDefined();
    });
  });
});
