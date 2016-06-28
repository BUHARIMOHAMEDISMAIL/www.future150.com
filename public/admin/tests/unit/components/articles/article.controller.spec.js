describe('articleController', function() {
  beforeEach(module('future150Admin'));

  var $controller,
    $scope,
    articleController,
    articlesServiceGetByIdStub,
    articlesServiceSaveStub,
    mockArticleResponse,
    stateGoSpy;

  beforeEach(inject(function(_$controller_,
      _$rootScope_,
      _$q_) {
    $controller = _$controller_;
    $scope = _$rootScope_.$new();
    var $state = {
      go: function() { }
    };

    mockArticleResponse = {};
    var mockArticleService = {
      getById: function() {},
      save: function() {}
    };

    var mockStateParams = {
      id: 123
    };

    articlesServiceGetByIdStub = sinon.stub(mockArticleService, 'getById')
      .returns(_$q_.resolve(mockArticleResponse));
    articlesServiceSaveStub = sinon.stub(mockArticleService, 'save')
      .returns(_$q_.resolve());
    stateGoSpy = sinon.spy($state, 'go');

    articleController = $controller('articleController', {
      $scope: $scope,
      articlesService: mockArticleService,
      $stateParams: mockStateParams,
      $state: $state
    });
    $scope.$apply();
  }));

  it('should be defined', function() {
    expect(articleController).toBeDefined();
  });

  it('should call getById method of articles service with the correct parameters', function() {
    expect(articlesServiceGetByIdStub.calledWith(123)).toBeTruthy();
  });

  it('should have correct article', function() {
    expect(articleController.article).toEqual({ createdDate: jasmine.any(Date) });
  });

  describe('save', function() {
    it('should be defined', function() {
      expect(articleController.save).toBeDefined();
    });

    it('should call save method of articles service with correct parameters', function() {
      articleController.save({});
      expect(articlesServiceSaveStub.calledWith({})).toBeTruthy();
    });

    it('should call go method of $state', function() {
      articleController.save({});
      $scope.$apply();
      expect(stateGoSpy.calledWith('articles')).toBeTruthy();
    });
  });
});
