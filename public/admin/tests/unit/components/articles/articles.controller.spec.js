describe('articlesController', function() {
  beforeEach(module('future150Admin'));

  var $controller,
    $scope,
    articlesController,
    articlesServiceGetAllStub,
    mockArticlesResponse;

  beforeEach(inject(function(_$controller_,
      $rootScope,
      $q,
      _articlesService_) {
    $controller = _$controller_;
    $scope = $rootScope.$new();
    mockArticlesResponse = {
      count: 4
    };

    articlesServiceGetAllStub = sinon.stub(_articlesService_, 'getAll').returns($q.when(mockArticlesResponse));

    articlesController = $controller('articlesController', {
      $scope: $scope,
      articlesService: _articlesService_
    });
    $scope.vm = articlesController;
  }));

  it('should be defined', function() {
    expect(articlesController).toBeDefined();
  });

  it('should have correct articles', function() {
    $scope.$digest();
    expect(articlesController.articles).toEqual(mockArticlesResponse.articles);
  });

  it('should have correct count', function() {
    $scope.$digest();
    expect(articlesController.count).toEqual(4);
  });

  it('should have correct start', function() {
    $scope.$digest();
    expect(articlesController.start).toEqual(1);
  });

  it('should have correct end', function() {
    $scope.$digest();
    expect(articlesController.end).toEqual(4);
  });

  it('should call getAll method of articles service with correct parameters on page load', function() {
    expect(articlesServiceGetAllStub.calledWith('', 1, 10)).toBeTruthy();
  });

  it('should call getAll method of articles service with correct parameters when q changes', function() {
    $scope.$apply('vm.q="test"');
    expect(articlesServiceGetAllStub.calledWith('test', 1, 10)).toBeTruthy();
  });

  it('should call getAll method of articles service with correct parameters when page changes', function() {
    $scope.$apply('vm.page=2');
    expect(articlesServiceGetAllStub.calledWith('', 2, 10)).toBeTruthy();
  });
});
