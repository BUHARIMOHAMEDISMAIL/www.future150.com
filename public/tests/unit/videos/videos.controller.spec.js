describe('videosController', function() {
  beforeEach(module('future150'));

  var $scope,
    videosController,
    videosServiceGetAllStub,
    $httpBackend;

  beforeEach(inject(function(_$controller_,
      _$q_,
      _$rootScope_,
      _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $scope = _$rootScope_.$new();

    var mockVideosService = {
      getAll: function() {}
    };

    videosServiceGetAllStub = sinon.stub(mockVideosService, 'getAll')
      .returns(_$q_.resolve({}));

    videosController = _$controller_('videosController', {
      $scope: $scope,
      videosService: mockVideosService
    });
    $scope.$apply();
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(videosController).toBeDefined();
  });
});
