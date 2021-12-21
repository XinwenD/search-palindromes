// import TestRenderer from "react-test-renderer";
import findPalindrome from "../src/common/findPalindromes";

test("A single caracter", () => {
  expect(findPalindrome("a")).toBeNull();
});
