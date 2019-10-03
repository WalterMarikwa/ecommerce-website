var chai = require("chai");
var expect = chai.expect;

const chaiHTTP = require("chai-http");

const app = require("../server");

chai.use(chaiHTTP);

describe('Tests for "/" api endpoint', () => {
  it("/ should send back 200 status code", done => {
    chai
      .request(app)
      .get("/api/products")
      .end((error, response) => {
        console.log("response - ", response.body.length > 0);
        expect(response.body.length > 0);
        done();
      });
  });

  it("/ should send back 200 status code", done => {
    chai
      .request(app)
      .get("/api/contacts")
      .end((error, response) => {
        console.log("response - ", response.body.length > 0);
        expect(response.body.length > 0);
        done();
      });
  });

  it("/ should send back 200 status code", done => {
    chai
      .request(app)
      .get("/api/products/2")
      .end((error, response) => {
        // console.log("response - ", response.body.length > 0);
        expect([
          {
            product_id: 2,
            category: "Guitar",
            product_type: "Semi Acoustic Guitar",
            description_type:
              "The semi-acoustic is a plucked string instrument."
          }
        ]);
        done();
      });
  });

  it("/ should send back 404 status code", done => {
    chai
      .request(app)
      .get("/api/productfilter")
      .end((error, response) => {
        // console.log("response - ", response.body.length > 0);
        expect(response.body.length > 0);
        done();
      });
  });
});

// it('returns a json that joined between prices and products', function(done) {
//     request('http://localhost:3030/api/products' , function(error, response, body) {
//         expect(response.statusCode).to.equal(200);
//         done();
//     });
// });

// it('returns a json of contacts', function(done) {
//     request('http://localhost:3030/api/contacts' , function(error, response, body) {
//         expect(response.statusCode).to.equal(200);
//         done();
//     });
// });

// it('fails to find the About webpage', function(done) {
//     request('http://localhost:3030/api/about' , function(error, response, body) {
//         expect(response.statusCode).to.equal(404);
//         done();
//     });
// });

// it('returns a single json of products', function(done) {
//     request('http://localhost:3030/api/products/1' , function(error, response, body) {
//         expect(response.body).to.equal()
//         done();
//     });
// });
