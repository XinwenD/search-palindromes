import { ASCEND, DESCEND } from "./constants";

const quickSortPalinArr = (arr, left, right, order = ASCEND) => {
  let l = left;
  let r = right;
  let temp = null;
  let pivot = arr[Math.floor((l + r) / 2)];
  if (order === ASCEND || order === 1) {
    while (l < r) {
      while (arr[l].length < pivot.length) {
        l++;
      }
      while (arr[r].length > pivot.length) {
        r--;
      }
      if (l >= r) {
        break;
      }
      temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      if (arr[l].length === pivot.length) {
        r--;
      }
      if (arr[r].length === pivot.length) {
        l++;
      }
    }
  } else if (order === DESCEND || order === 0) {
    while (l < r) {
      while (arr[l].length > pivot.length) {
        l++;
      }
      while (arr[r].length < pivot.length) {
        r--;
      }
      if (l >= r) {
        break;
      }
      temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      if (arr[l].length === pivot.length) {
        r--;
      }
      if (arr[r].length === pivot.length) {
        l++;
      }
    }
  }

  if (l === r) {
    l++;
    r--;
  }
  if (left < r) {
    quickSortPalinArr(arr, left, r, order);
  }
  if (right > l) {
    quickSortPalinArr(arr, l, right, order);
  }
  return arr;
};

export default quickSortPalinArr;
