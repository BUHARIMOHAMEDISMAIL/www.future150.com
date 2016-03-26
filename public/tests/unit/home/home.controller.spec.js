describe('homeController', function() {
  beforeEach(module('future150'));

  var $controller,
    $rootScope,
    $scope,
    homeController,
    articlesServiceGetFeaturedArticleStub,
    articlesServiceGetHighlighedArticlesStub,
    rankingsServiceGetAllStub,
    eventsServiceGetUpcomingEventsStub,
    videosServiceGetTopVideosStub,
    playersServiceGetTrendingPlayersStub;

  beforeEach(inject(function(_$controller_,
      _$rootScope_,
      _$q_) {
    $rootScope = _$rootScope_;
    $rootScope.site = 'hs';
    $scope = _$rootScope_.$new();
    $controller = _$controller_;

    var mockArticlesService = {
      getFeaturedArticle: function() {},
      getHighlighedArticles: function() {}
    };
    var mockRankingsService = {
      getAll: function() {}
    };
    var mockEventsService = {
      getUpcomingEvents: function() {}
    };
    var mockVideosService = {
      getTopVideos: function() {}
    };
    var mockPlayersService = {
      getTrendingPlayers: function() {}
    };

    articlesServiceGetFeaturedArticleStub = sinon.stub(mockArticlesService, 'getFeaturedArticle')
      .returns(_$q_.resolve({ featuredArticle: '/test-article.jpg' }));
    articlesServiceGetHighlighedArticlesStub = sinon.stub(mockArticlesService, 'getHighlighedArticles')
      .returns(_$q_.resolve({}));
    rankingsServiceGetAllStub = sinon.stub(mockRankingsService, 'getAll')
      .returns(_$q_.resolve({}));
    eventsServiceGetUpcomingEventsStub = sinon.stub(mockEventsService, 'getUpcomingEvents')
      .returns(_$q_.resolve({}));
    videosServiceGetTopVideosStub = sinon.stub(mockVideosService, 'getTopVideos')
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

  it('should call getFeaturedArticle method of articles service', function() {
    expect(articlesServiceGetFeaturedArticleStub).toHaveBeenCalledWith('hs');
  });

  it('should call getHighlighedArticles method of articles service', function() {
    expect(articlesServiceGetHighlighedArticlesStub).toHaveBeenCalledWith('hs');
  });

  it('should call getAll method of rankings service', function() {
    expect(rankingsServiceGetAllStub).toHaveBeenCalledWith('national', 'hs');
  });

  it('should call getUpcomingEvents method of events service', function() {
    expect(eventsServiceGetUpcomingEventsStub).toHaveBeenCalled();
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
