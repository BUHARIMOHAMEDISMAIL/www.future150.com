var request = require('supertest'),
  server = require('../../server');

describe('Article Routes', function() {
  describe('GET /articles', function() {
    it('should have articles property', function(done) {
      request(server)
        .get('/articles')
        .expect(200)
        .end(function(err, res) {
          expect(res.body.articles).toBeDefined();
          done();
        });
    });
  });
  describe('GET /articles/:id', function() {
    it('should have _id property', function(done) {
      request(server)
        .get('/articles/574335c85612a00300ed22ea')
        .expect(200)
        .end(function(err, res) {
          expect(res.body._id).toBeDefined();
          done();
        });
    });
  });
  describe('GET /articles/:legacyId', function() {
    it('should have _id property', function(done) {
      request(server)
        .get('/articles/26352')
        .expect(200)
        .end(function(err, res) {
          expect(res.body._id).toBeDefined();
          done();
        });
    });
  });
  describe('GET /articles/:slug', function() {
    it('should have _id property', function(done) {
      request(server)
        .get('/articles/spring-rewind-five-future150-alumni-whose-game-shined-brightest')
        .expect(200)
        .end(function(err, res) {
          expect(res.body._id).toBeDefined();
          done();
        });
    });
  });
  describe('POST /articles', function() {
    it('respond with correct status code', function(done) {
      var article = {
        title: 'My Test',
        slug: 'my-test'
      };

      request(server)
        .post('/articles')
        .send(article)
        .expect(201)
        .end(done);
    });
  });
  describe('PUT /articles/:id', function() {
    it('respond with correct status code', function(done) {
      var article = {
        title: 'My Test',
        slug: 'my-test'
      };

      request(server)
        .put('/articles/574335c85612a00300ed22ea')
        .send(article)
        .expect(204)
        .end(done);
    });
  });
});
