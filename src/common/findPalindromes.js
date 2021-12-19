const findPalindrome = (str) => {
  const size = str.length;
  const palinArr = [];
  let count = 0;
  for (let i = 0; i < 2 * size - 1; i++) {
    let left = Math.floor(i / 2);
    let right = Math.floor(i / 2) + (i % 2);
    while (
      left >= 0 &&
      right < size &&
      str.charAt(left) === str.charAt(right)
    ) {
      if (left !== right) {
        palinArr[count] = {
          palin: str.slice(left, right + 1),
          position: left,
          length: right - left + 1,
        };
        count++;
      }
      left--;
      right++;
    }
  }
  return palinArr;
};

export default findPalindrome;
