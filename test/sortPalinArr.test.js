import sortPalinArr from "../src/common/sortPalinArr";
import { ASCEND, DESCEND, LENGTH, POSITION } from "../src/common/constants";

describe("example test case: ABCBAHELLOHOWRACECARAREYOUILOVEUEVOLIIAMAIDOINGGOOD", () => {
  // input arr
  const arr = [
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
  describe("primary sort key: length, secondary sort key: position", () => {
    test("length/ascend, position/ascend", () => {
      const order = {
        sortKey: LENGTH,
        length: ASCEND,
        position: ASCEND,
      };
      const result = [
        { palin: "LL", position: 7, length: 2 },
        { palin: "II", position: 36, length: 2 },
        { palin: "GG", position: 46, length: 2 },
        { palin: "OO", position: 48, length: 2 },
        { palin: "BCB", position: 1, length: 3 },
        { palin: "OHO", position: 9, length: 3 },
        { palin: "CEC", position: 15, length: 3 },
        { palin: "ARA", position: 18, length: 3 },
        { palin: "RAR", position: 19, length: 3 },
        { palin: "EUE", position: 30, length: 3 },
        { palin: "AMA", position: 38, length: 3 },
        { palin: "ABCBA", position: 0, length: 5 },
        { palin: "ACECA", position: 14, length: 5 },
        { palin: "VEUEV", position: 29, length: 5 },
        { palin: "IAMAI", position: 37, length: 5 },
        { palin: "RACECAR", position: 13, length: 7 },
        { palin: "OVEUEVO", position: 28, length: 7 },
        { palin: "LOVEUEVOL", position: 27, length: 9 },
        { palin: "ILOVEUEVOLI", position: 26, length: 11 },
      ];
      expect(sortPalinArr(arr, order)).toEqual(result);
    });

    test("length/ascend, position/descend", () => {
      const order = {
        sortKey: LENGTH,
        length: ASCEND,
        position: DESCEND,
      };
      const result = [
        { palin: "OO", position: 48, length: 2 },
        { palin: "GG", position: 46, length: 2 },
        { palin: "II", position: 36, length: 2 },
        { palin: "LL", position: 7, length: 2 },
        { palin: "AMA", position: 38, length: 3 },
        { palin: "EUE", position: 30, length: 3 },
        { palin: "RAR", position: 19, length: 3 },
        { palin: "ARA", position: 18, length: 3 },
        { palin: "CEC", position: 15, length: 3 },
        { palin: "OHO", position: 9, length: 3 },
        { palin: "BCB", position: 1, length: 3 },
        { palin: "IAMAI", position: 37, length: 5 },
        { palin: "VEUEV", position: 29, length: 5 },
        { palin: "ACECA", position: 14, length: 5 },
        { palin: "ABCBA", position: 0, length: 5 },
        { palin: "OVEUEVO", position: 28, length: 7 },
        { palin: "RACECAR", position: 13, length: 7 },
        { palin: "LOVEUEVOL", position: 27, length: 9 },
        { palin: "ILOVEUEVOLI", position: 26, length: 11 },
      ];
      expect(sortPalinArr(arr, order)).toEqual(result);
    });

    test("length/descend, position/ascend", () => {
      const order = {
        sortKey: LENGTH,
        length: DESCEND,
        position: ASCEND,
      };
      const result = [
        { palin: "ILOVEUEVOLI", position: 26, length: 11 },
        { palin: "LOVEUEVOL", position: 27, length: 9 },
        { palin: "RACECAR", position: 13, length: 7 },
        { palin: "OVEUEVO", position: 28, length: 7 },
        { palin: "ABCBA", position: 0, length: 5 },
        { palin: "ACECA", position: 14, length: 5 },
        { palin: "VEUEV", position: 29, length: 5 },
        { palin: "IAMAI", position: 37, length: 5 },
        { palin: "BCB", position: 1, length: 3 },
        { palin: "OHO", position: 9, length: 3 },
        { palin: "CEC", position: 15, length: 3 },
        { palin: "ARA", position: 18, length: 3 },
        { palin: "RAR", position: 19, length: 3 },
        { palin: "EUE", position: 30, length: 3 },
        { palin: "AMA", position: 38, length: 3 },
        { palin: "LL", position: 7, length: 2 },
        { palin: "II", position: 36, length: 2 },
        { palin: "GG", position: 46, length: 2 },
        { palin: "OO", position: 48, length: 2 },
      ];
      expect(sortPalinArr(arr, order)).toEqual(result);
    });

    test("length/descend, position/descend", () => {
      const order = {
        sortKey: LENGTH,
        length: DESCEND,
        position: DESCEND,
      };
      const result = [
        { palin: "ILOVEUEVOLI", position: 26, length: 11 },
        { palin: "LOVEUEVOL", position: 27, length: 9 },
        { palin: "OVEUEVO", position: 28, length: 7 },
        { palin: "RACECAR", position: 13, length: 7 },
        { palin: "IAMAI", position: 37, length: 5 },
        { palin: "VEUEV", position: 29, length: 5 },
        { palin: "ACECA", position: 14, length: 5 },
        { palin: "ABCBA", position: 0, length: 5 },
        { palin: "AMA", position: 38, length: 3 },
        { palin: "EUE", position: 30, length: 3 },
        { palin: "RAR", position: 19, length: 3 },
        { palin: "ARA", position: 18, length: 3 },
        { palin: "CEC", position: 15, length: 3 },
        { palin: "OHO", position: 9, length: 3 },
        { palin: "BCB", position: 1, length: 3 },
        { palin: "OO", position: 48, length: 2 },
        { palin: "GG", position: 46, length: 2 },
        { palin: "II", position: 36, length: 2 },
        { palin: "LL", position: 7, length: 2 },
      ];
      expect(sortPalinArr(arr, order)).toEqual(result);
    });
  });

  describe("primary sort key: position, secondary sort key: length", () => {
    test("position/ascend, length/ascend", () => {
      const order = {
        sortKey: POSITION,
        length: ASCEND,
        position: ASCEND,
      };
      const result = [
        { palin: "ABCBA", position: 0, length: 5 },
        { palin: "BCB", position: 1, length: 3 },
        { palin: "LL", position: 7, length: 2 },
        { palin: "OHO", position: 9, length: 3 },
        { palin: "RACECAR", position: 13, length: 7 },
        { palin: "ACECA", position: 14, length: 5 },
        { palin: "CEC", position: 15, length: 3 },
        { palin: "ARA", position: 18, length: 3 },
        { palin: "RAR", position: 19, length: 3 },
        { palin: "ILOVEUEVOLI", position: 26, length: 11 },
        { palin: "LOVEUEVOL", position: 27, length: 9 },
        { palin: "OVEUEVO", position: 28, length: 7 },
        { palin: "VEUEV", position: 29, length: 5 },
        { palin: "EUE", position: 30, length: 3 },
        { palin: "II", position: 36, length: 2 },
        { palin: "IAMAI", position: 37, length: 5 },
        { palin: "AMA", position: 38, length: 3 },
        { palin: "GG", position: 46, length: 2 },
        { palin: "OO", position: 48, length: 2 },
      ];
      expect(sortPalinArr(arr, order)).toEqual(result);
    });

    test("position/ascend, length/descend", () => {
      const order = {
        sortKey: POSITION,
        length: DESCEND,
        position: ASCEND,
      };
      const result = [
        { palin: "ABCBA", position: 0, length: 5 },
        { palin: "BCB", position: 1, length: 3 },
        { palin: "LL", position: 7, length: 2 },
        { palin: "OHO", position: 9, length: 3 },
        { palin: "RACECAR", position: 13, length: 7 },
        { palin: "ACECA", position: 14, length: 5 },
        { palin: "CEC", position: 15, length: 3 },
        { palin: "ARA", position: 18, length: 3 },
        { palin: "RAR", position: 19, length: 3 },
        { palin: "ILOVEUEVOLI", position: 26, length: 11 },
        { palin: "LOVEUEVOL", position: 27, length: 9 },
        { palin: "OVEUEVO", position: 28, length: 7 },
        { palin: "VEUEV", position: 29, length: 5 },
        { palin: "EUE", position: 30, length: 3 },
        { palin: "II", position: 36, length: 2 },
        { palin: "IAMAI", position: 37, length: 5 },
        { palin: "AMA", position: 38, length: 3 },
        { palin: "GG", position: 46, length: 2 },
        { palin: "OO", position: 48, length: 2 },
      ];
      expect(sortPalinArr(arr, order)).toEqual(result);
    });

    test("position/descend, length/ascend", () => {
      const order = {
        sortKey: POSITION,
        length: ASCEND,
        position: DESCEND,
      };
      const result = [
        { palin: "OO", position: 48, length: 2 },
        { palin: "GG", position: 46, length: 2 },
        { palin: "AMA", position: 38, length: 3 },
        { palin: "IAMAI", position: 37, length: 5 },
        { palin: "II", position: 36, length: 2 },
        { palin: "EUE", position: 30, length: 3 },
        { palin: "VEUEV", position: 29, length: 5 },
        { palin: "OVEUEVO", position: 28, length: 7 },
        { palin: "LOVEUEVOL", position: 27, length: 9 },
        { palin: "ILOVEUEVOLI", position: 26, length: 11 },
        { palin: "RAR", position: 19, length: 3 },
        { palin: "ARA", position: 18, length: 3 },
        { palin: "CEC", position: 15, length: 3 },
        { palin: "ACECA", position: 14, length: 5 },
        { palin: "RACECAR", position: 13, length: 7 },
        { palin: "OHO", position: 9, length: 3 },
        { palin: "LL", position: 7, length: 2 },
        { palin: "BCB", position: 1, length: 3 },
        { palin: "ABCBA", position: 0, length: 5 },
      ];
      expect(sortPalinArr(arr, order)).toEqual(result);
    });

    test("position/descend, length/descend", () => {
      const order = {
        sortKey: POSITION,
        length: DESCEND,
        position: DESCEND,
      };
      const result = [
        { palin: "OO", position: 48, length: 2 },
        { palin: "GG", position: 46, length: 2 },
        { palin: "AMA", position: 38, length: 3 },
        { palin: "IAMAI", position: 37, length: 5 },
        { palin: "II", position: 36, length: 2 },
        { palin: "EUE", position: 30, length: 3 },
        { palin: "VEUEV", position: 29, length: 5 },
        { palin: "OVEUEVO", position: 28, length: 7 },
        { palin: "LOVEUEVOL", position: 27, length: 9 },
        { palin: "ILOVEUEVOLI", position: 26, length: 11 },
        { palin: "RAR", position: 19, length: 3 },
        { palin: "ARA", position: 18, length: 3 },
        { palin: "CEC", position: 15, length: 3 },
        { palin: "ACECA", position: 14, length: 5 },
        { palin: "RACECAR", position: 13, length: 7 },
        { palin: "OHO", position: 9, length: 3 },
        { palin: "LL", position: 7, length: 2 },
        { palin: "BCB", position: 1, length: 3 },
        { palin: "ABCBA", position: 0, length: 5 },
      ];
      expect(sortPalinArr(arr, order)).toEqual(result);
    });
  });
});

/*
 * the example case does not have palindromes starting from the same position
 * use a new case to test when primary sort key is position
 */
describe("test case: aaaabbbbccccMadamLolLoL", () => {
  // input arr
  const arr = [
    { palin: "aa", position: 0, length: 2 },
    { palin: "aaa", position: 0, length: 3 },
    { palin: "aa", position: 1, length: 2 },
    { palin: "aaaa", position: 0, length: 4 },
    { palin: "aaa", position: 1, length: 3 },
    { palin: "aa", position: 2, length: 2 },
    { palin: "bb", position: 4, length: 2 },
    { palin: "bbb", position: 4, length: 3 },
    { palin: "bb", position: 5, length: 2 },
    { palin: "bbbb", position: 4, length: 4 },
    { palin: "bbb", position: 5, length: 3 },
    { palin: "bb", position: 6, length: 2 },
    { palin: "cc", position: 8, length: 2 },
    { palin: "ccc", position: 8, length: 3 },
    { palin: "cc", position: 9, length: 2 },
    { palin: "cccc", position: 8, length: 4 },
    { palin: "ccc", position: 9, length: 3 },
    { palin: "cc", position: 10, length: 2 },
    { palin: "ada", position: 13, length: 3 },
    { palin: "LoL", position: 20, length: 3 },
  ];
  describe("primary sort key: position, secondary sort key: length", () => {
    test("position/ascend, length/ascend", () => {
      const order = {
        sortKey: POSITION,
        length: ASCEND,
        position: ASCEND,
      };
      const result = [
        { palin: "aa", position: 0, length: 2 },
        { palin: "aaa", position: 0, length: 3 },
        { palin: "aaaa", position: 0, length: 4 },
        { palin: "aa", position: 1, length: 2 },
        { palin: "aaa", position: 1, length: 3 },
        { palin: "aa", position: 2, length: 2 },
        { palin: "bb", position: 4, length: 2 },
        { palin: "bbb", position: 4, length: 3 },
        { palin: "bbbb", position: 4, length: 4 },
        { palin: "bb", position: 5, length: 2 },
        { palin: "bbb", position: 5, length: 3 },
        { palin: "bb", position: 6, length: 2 },
        { palin: "cc", position: 8, length: 2 },
        { palin: "ccc", position: 8, length: 3 },
        { palin: "cccc", position: 8, length: 4 },
        { palin: "cc", position: 9, length: 2 },
        { palin: "ccc", position: 9, length: 3 },
        { palin: "cc", position: 10, length: 2 },
        { palin: "ada", position: 13, length: 3 },
        { palin: "LoL", position: 20, length: 3 },
      ];
      expect(sortPalinArr(arr, order)).toEqual(result);
    });

    test("position/ascend, length/descend", () => {
      const order = {
        sortKey: POSITION,
        length: DESCEND,
        position: ASCEND,
      };
      const result = [
        { palin: "aaaa", position: 0, length: 4 },
        { palin: "aaa", position: 0, length: 3 },
        { palin: "aa", position: 0, length: 2 },
        { palin: "aaa", position: 1, length: 3 },
        { palin: "aa", position: 1, length: 2 },
        { palin: "aa", position: 2, length: 2 },
        { palin: "bbbb", position: 4, length: 4 },
        { palin: "bbb", position: 4, length: 3 },
        { palin: "bb", position: 4, length: 2 },
        { palin: "bbb", position: 5, length: 3 },
        { palin: "bb", position: 5, length: 2 },
        { palin: "bb", position: 6, length: 2 },
        { palin: "cccc", position: 8, length: 4 },
        { palin: "ccc", position: 8, length: 3 },
        { palin: "cc", position: 8, length: 2 },
        { palin: "ccc", position: 9, length: 3 },
        { palin: "cc", position: 9, length: 2 },
        { palin: "cc", position: 10, length: 2 },
        { palin: "ada", position: 13, length: 3 },
        { palin: "LoL", position: 20, length: 3 },
      ];
      expect(sortPalinArr(arr, order)).toEqual(result);
    });

    test("position/descend, length/ascend", () => {
      const order = {
        sortKey: POSITION,
        length: ASCEND,
        position: DESCEND,
      };
      const result = [
        { palin: "LoL", position: 20, length: 3 },
        { palin: "ada", position: 13, length: 3 },
        { palin: "cc", position: 10, length: 2 },
        { palin: "cc", position: 9, length: 2 },
        { palin: "ccc", position: 9, length: 3 },
        { palin: "cc", position: 8, length: 2 },
        { palin: "ccc", position: 8, length: 3 },
        { palin: "cccc", position: 8, length: 4 },
        { palin: "bb", position: 6, length: 2 },
        { palin: "bb", position: 5, length: 2 },
        { palin: "bbb", position: 5, length: 3 },
        { palin: "bb", position: 4, length: 2 },
        { palin: "bbb", position: 4, length: 3 },
        { palin: "bbbb", position: 4, length: 4 },
        { palin: "aa", position: 2, length: 2 },
        { palin: "aa", position: 1, length: 2 },
        { palin: "aaa", position: 1, length: 3 },
        { palin: "aa", position: 0, length: 2 },
        { palin: "aaa", position: 0, length: 3 },
        { palin: "aaaa", position: 0, length: 4 },
      ];
      expect(sortPalinArr(arr, order)).toEqual(result);
    });

    test("position/descend, length/descend", () => {
      const order = {
        sortKey: POSITION,
        length: DESCEND,
        position: DESCEND,
      };
      const result = [
        { palin: "LoL", position: 20, length: 3 },
        { palin: "ada", position: 13, length: 3 },
        { palin: "cc", position: 10, length: 2 },
        { palin: "ccc", position: 9, length: 3 },
        { palin: "cc", position: 9, length: 2 },
        { palin: "cccc", position: 8, length: 4 },
        { palin: "ccc", position: 8, length: 3 },
        { palin: "cc", position: 8, length: 2 },
        { palin: "bb", position: 6, length: 2 },
        { palin: "bbb", position: 5, length: 3 },
        { palin: "bb", position: 5, length: 2 },
        { palin: "bbbb", position: 4, length: 4 },
        { palin: "bbb", position: 4, length: 3 },
        { palin: "bb", position: 4, length: 2 },
        { palin: "aa", position: 2, length: 2 },
        { palin: "aaa", position: 1, length: 3 },
        { palin: "aa", position: 1, length: 2 },
        { palin: "aaaa", position: 0, length: 4 },
        { palin: "aaa", position: 0, length: 3 },
        { palin: "aa", position: 0, length: 2 },
      ];
      expect(sortPalinArr(arr, order)).toEqual(result);
    });
  });
});
