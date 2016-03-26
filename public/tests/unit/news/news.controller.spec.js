describe('newsController', function() {
  beforeEach(module('future150'));

  var $controller,
    $rootScope,
    $scope,
    newsController,
    articlesServiceGetAllStub;

  beforeEach(inject(function(_$controller_,
      _$rootScope_,
      _$q_,
      _$httpBackend_) {
    $controller = _$controller_;
    $scope = _$rootScope_.$new();
    $rootScope = _$rootScope_;
    $rootScope.site = 'hs';

    var mockArticlesService = {
      getAll: function() {}
    };

    articlesServiceGetAllStub = sinon.stub(mockArticlesService, 'getAll')
      .returns(_$q_.resolve({}));

    newsController = $controller('newsController', {
      $scope: $scope,
      $rootScope: _$rootScope_,
      articlesService: mockArticlesService
    });
    $scope.$apply();
  }));

  it('should be defined', function() {
    expect(newsController).toBeDefined();
  });

  it('should call getAll method of articles service', function() {
    expect(articlesServiceGetAllStub).toHaveBeenCalledWith('hs', null, 1, 10);
  });
});
