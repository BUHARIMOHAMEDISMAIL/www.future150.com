describe('rankingsController', function() {
  beforeEach(module('future150'));

  var $scope,
    rankingsController,
    rankingsServiceGetAllStub,
    rankingsServiceGetByIdStub,
    $httpBackend;

  beforeEach(inject(function(_$controller_,
      _$q_,
      _$rootScope_,
      _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $scope = _$rootScope_.$new();

    var mockRankingsService = {
      getAll: function() {},
      getById: function() {}
    };

    rankingsServiceGetAllStub = sinon.stub(mockRankingsService, 'getAll')
      .returns(_$q_.resolve({}));
    rankingsServiceGetByIdStub = sinon.stub(mockRankingsService, 'getById')
      .returns(_$q_.resolve({}));

    rankingsController = _$controller_('rankingsController', {
      rankingsService: mockRankingsService
    });
    $scope.$apply();
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(rankingsController).toBeDefined();
  });
});
