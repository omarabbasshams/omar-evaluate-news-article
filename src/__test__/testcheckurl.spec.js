const check = require("../client/js/checkurl");

test("", () => {
  expect(check("omar")).toBe("Not a URI");
});
