describe('searchController', function() {
  beforeEach(module('future150'));

  var $scope,
    searchController,
    playersServiceGetAllStub,
    $httpBackend;

  beforeEach(inject(function(_$controller_,
      _$q_,
      _$rootScope_,
      _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $scope = _$rootScope_.$new();

    var mockPlayersService = {
      getAll: function() {}
    };

    playersServiceGetAllStub = sinon.stub(mockPlayersService, 'getAll')
      .returns(_$q_.resolve({}));

    searchController = _$controller_('searchController', {
      $scope: $scope,
      playersService: mockPlayersService
    });
    $scope.$apply();
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(searchController).toBeDefined();
  });
});
