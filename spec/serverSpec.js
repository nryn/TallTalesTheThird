var request = require("request");

var base_url = "http://localhost:3000/"

describe("TallTales Server", function() {
  describe("GET /", function() {

    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns the Tall Tales index html", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toContain("<title>Tall Tales</title>");
        done();
      });
    });
  });
});
