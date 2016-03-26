describe('articleController', function() {
  beforeEach(module('future150'));

  var $scope,
    $rootScope,
    articleController,
    articlesServiceGetBySlugStub,
    testArticle,
    $httpBackend;

  beforeEach(inject(function(_$controller_,
      _$rootScope_,
      _$q_,
      _$httpBackend_) {
    $rootScope = _$rootScope_;
    $scope = _$rootScope_.$new();
    $httpBackend = _$httpBackend_;

    var mockState = {
      params: {
        slug: 'test-article'
      }
    };

    var mockArticlesService = {
      getBySlug: function() {}
    };

    testArticle = {
      title: 'Test Article',
      description: 'This is a test article.',
      imageUrl: '//future150.com/images/test-image.png',
      body: '<p>This is a test body.</p>'
    };

    articlesServiceGetBySlugStub = sinon.stub(mockArticlesService, 'getBySlug')
      .returns(_$q_.resolve(testArticle));

    articleController = _$controller_('articleController', {
      $state: mockState,
      articlesService: mockArticlesService
    });
    $scope.$apply();
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(articleController).toBeDefined();
  });

  it('should call getBySlug function of articlesService', function() {
    expect(articlesServiceGetBySlugStub).toHaveBeenCalledWith('test-article');
  });

  it('should return correct title', function() {
    expect($rootScope.title).toEqual('Test Article');
  });

  it('should return correct description', function() {
    expect($rootScope.description).toEqual('This is a test article.');
  });

  it('should return correct featuredImageUrl', function() {
    expect($rootScope.featuredImageUrl).toEqual('//future150.com/images/test-image.png');
  });

  it('should return correct article', function() {
    expect(articleController.article).toBe(testArticle);
  });
});
