describe('collegeController', function() {
  beforeEach(module('future150Admin'));

  var $controller,
    $scope,
    collegeController,
    collegesServiceGetByIdStub,
    collegesServiceSaveStub,
    mockCollegeResponse,
    stateGoSpy;

  beforeEach(inject(function(_$controller_,
      $rootScope,
      $q,
      _collegesService_) {
    $controller = _$controller_;
    $scope = $rootScope.$new();
    mockCollegeResponse = {};
    var $state = {
      go: function() { }
    };

    collegesServiceGetByIdStub = sinon.stub(_collegesService_, 'getById').returns($q.when(mockCollegeResponse));
    collegesServiceSaveStub = sinon.stub(_collegesService_, 'save').returns($q.when());
    stateGoSpy = sinon.spy($state, 'go');

    collegeController = $controller('collegeController', {
      $scope: $scope,
      collegesService: _collegesService_,
      $stateParams: { id: 123 },
      $state: $state
    });
  }));

  it('should be defined', function() {
    expect(collegeController).toBeDefined();
  });

  it('should call getById method of colleges service with the correct parameters', function() {
    expect(collegesServiceGetByIdStub.calledWith(123)).toBeTruthy();
  });

  it('should have correct college', function() {
    $scope.$digest();
    expect(collegeController.college).toBe(mockCollegeResponse);
  });

  describe('save', function() {
    it('should be defined', function() {
      expect(collegeController.save).toBeDefined();
    });

    it('should call save method of colleges service with correct parameters', function() {
      collegeController.save({});
      expect(collegesServiceSaveStub.calledWith({})).toBeTruthy();
    });

    it('should call go method of $state', function() {
      collegeController.save({});
      $scope.$digest();
      expect(stateGoSpy.calledWith('colleges')).toBeTruthy();
    });
  });
});
