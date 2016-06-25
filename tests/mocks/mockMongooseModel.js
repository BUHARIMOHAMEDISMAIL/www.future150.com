var MockMongooseModel = function(result) {
  var Q = require('q');

  return {
    find: function() {
      return this;
    },
    count: function() {
      return this;
    },
    sort: function() {
      return this;
    },
    skip: function() {
      return this;
    },
    limit: function() {
      return this;
    },
    exec: function() {
      return Q(result);
    }
  };
};

module.exports = MockMongooseModel;
