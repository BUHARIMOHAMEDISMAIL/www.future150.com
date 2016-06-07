var MockResponse = function() {
  var jsonResult;
  return {
    json: function(result) {
      jsonResult = result;
    },
    getJsonResult: function() {
      return jsonResult;
    }
  };
};

module.exports = MockResponse;
