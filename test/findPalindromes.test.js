import findPalindrome from "../src/common/findPalindromes";

// test case: ABCBAHELLOHOWRACECARAREYOUILOVEUEVOLIIAMAIDOINGGOOD
const result = [
  { palin: "BCB", position: 1, length: 3 },
  { palin: "ABCBA", position: 0, length: 5 },
  { palin: "LL", position: 7, length: 2 },
  { palin: "OHO", position: 9, length: 3 },
  { palin: "CEC", position: 15, length: 3 },
  { palin: "ACECA", position: 14, length: 5 },
  { palin: "RACECAR", position: 13, length: 7 },
  { palin: "ARA", position: 18, length: 3 },
  { palin: "RAR", position: 19, length: 3 },
  { palin: "EUE", position: 30, length: 3 },
  { palin: "VEUEV", position: 29, length: 5 },
  { palin: "OVEUEVO", position: 28, length: 7 },
  { palin: "LOVEUEVOL", position: 27, length: 9 },
  { palin: "ILOVEUEVOLI", position: 26, length: 11 },
  { palin: "II", position: 36, length: 2 },
  { palin: "AMA", position: 38, length: 3 },
  { palin: "IAMAI", position: 37, length: 5 },
  { palin: "GG", position: 46, length: 2 },
  { palin: "OO", position: 48, length: 2 },
];

test("test the given string", () => {
  const str = "ABCBAHELLOHOWRACECARAREYOUILOVEUEVOLIIAMAIDOINGGOOD";
  expect(findPalindrome(str)).toEqual(result);
});
