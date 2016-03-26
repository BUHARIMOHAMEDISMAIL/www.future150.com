describe('videosService', function() {
  beforeEach(module('future150'));

  var videosService,
    $httpBackend,
    mockVideoResult = {
      count: 2,
      videos: [
        {},
        {}
      ]
    };

  beforeEach(inject(function(_videosService_, _$httpBackend_) {
    videosService = _videosService_;
    $httpBackend = _$httpBackend_;

    $httpBackend.whenGET('/videos').respond(mockVideoResult);
    $httpBackend.whenGET('/videos?page=1&pageSize=4&site=hs').respond(mockVideoResult);
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should be defined', function() {
    expect(videosService).toBeDefined();
  });

  describe('getAll', function() {
    it('should return count of 2', function() {
      videosService.getAll().then(function(videoResult) {
        expect(videoResult.count).toEqual(2);
      });
      $httpBackend.flush();
    });
    it('should return 2 videos', function() {
      videosService.getAll().then(function(videoResult) {
        expect(videoResult.videos.length).toEqual(2);
      });
      $httpBackend.flush();
    });
  });

  describe('getTopVideos', function() {
    it('should return 2 videos', function() {
      videosService.getTopVideos('hs').then(function(videoResult) {
        expect(videoResult.topVideos.length).toEqual(2);
      });
      $httpBackend.flush();
    });
  });
});
