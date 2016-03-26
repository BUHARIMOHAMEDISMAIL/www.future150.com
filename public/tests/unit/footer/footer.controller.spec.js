describe('footerController', function() {
  beforeEach(module('future150'));

  var $scope,
    footerController,
    mockArticlesService,
    articlesServiceGetAllStub,
    $httpBackend;

  beforeEach(inject(function(_$controller_,
      _$rootScope_,
      _$q_,
      _$httpBackend_) {
    $scope = _$rootScope_.$new();
    $httpBackend = _$httpBackend_;

    mockArticlesService = {
      getAll: function() {}
    };

    var testArticlesResponse = {
      articles: [
        {},
        {}
      ]
    };

    articlesServiceGetAllStub = sinon.stub(mockArticlesService, 'getAll')
      .returns(_$q_.resolve(testArticlesResponse));

    footerController = _$controller_('footerController', {
      articlesService: mockArticlesService
    });
    $scope.$apply();
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(footerController).toBeDefined();
  });

  it('should call getAll function of articlesService', function() {
    expect(articlesServiceGetAllStub).toHaveBeenCalled();
  });

  describe('latestArticles', function() {
    it('should return correct length', function() {
      expect(footerController.latestArticles.length).toEqual(2);
    });
  });
});
