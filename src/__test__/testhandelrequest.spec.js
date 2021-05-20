import "babel-polyfill";

// Import the js file to test
const handelrequest = require("../client/js/handelrequest");
describe("Testing the request functionality", () => {
  test("Testing the handelrequest() function", () => {
    expect(handelrequest).toBeDefined();
  });
});
