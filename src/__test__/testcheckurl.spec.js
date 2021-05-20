import "babel-polyfill";
import { check } from "../client/js/checkurl";

test("check if not url", () => {
  expect(check("omar")).toBe(0);
});

test("check is url", () => {
  expect(check("https://classroom.udacity.com/")).toBe(1);
});
