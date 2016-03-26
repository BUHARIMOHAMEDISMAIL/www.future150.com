describe('collegesController', function() {
  beforeEach(module('future150Admin'));

  var $controller,
    $scope,
    collegesController,
    collegesServiceGetAllStub,
    mockCollegesResponse;

  beforeEach(inject(function(_$controller_,
      $rootScope,
      $q,
      _collegesService_) {
    $controller = _$controller_;
    $scope = $rootScope.$new();
    mockCollegesResponse = {
      count: 355
    };

    collegesServiceGetAllStub = sinon.stub(_collegesService_, 'getAll').returns($q.when(mockCollegesResponse));

    collegesController = $controller('collegesController', {
      $scope: $scope,
      collegesService: _collegesService_
    });
    $scope.vm = collegesController;
    $scope.$apply();
  }));

  it('should be defined', function() {
    expect(collegesController).toBeDefined();
  });

  it('should have correct colleges', function() {
    expect(collegesController.colleges).toEqual(mockCollegesResponse.colleges);
  });

  it('should have correct count', function() {
    expect(collegesController.count).toEqual(355);
  });

  it('should have correct start', function() {
    expect(collegesController.start).toEqual(1);
  });

  it('should have correct end', function() {
    expect(collegesController.end).toEqual(10);
  });

  it('should call getAll method of colleges service with correct parameters on page load', function() {
    expect(collegesServiceGetAllStub).toHaveBeenCalledWith('', 1, 10);
  });

  it('should call getAll method of colleges service with correct parameters when q changes', function() {
    collegesController.q = 'test';
    $scope.$apply();
    expect(collegesServiceGetAllStub).toHaveBeenCalledWith('test', 1, 10);
  });

  it('should call getAll method of colleges service with correct parameters when page changes', function() {
    collegesController.page = 2;
    $scope.$apply();
    expect(collegesServiceGetAllStub).toHaveBeenCalledWith('', 2, 10);
  });
});
