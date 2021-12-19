import { ASCEND, DESCEND } from "./constants";

// arr: the array that needs to be sorted
// left: left pointer
// right: right pointer
// order: ascend/desend (by order.length/order.position)

const quickSort = (arr, left, right, order, key) => {
  let l = left;
  let r = right;
  let temp = null;
  let pivot = arr[Math.floor((l + r) / 2)];
  // debugger;
  if (order === ASCEND) {
    while (l < r) {
      while (arr[l][key] < pivot[key]) {
        l++;
      }
      while (arr[r][key] > pivot[key]) {
        r--;
      }
      if (l >= r) {
        break;
      }
      temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      if (arr[l][key] === pivot[key]) {
        r--;
      }
      if (arr[r][key] === pivot[key]) {
        l++;
      }
    }
  } else if (order === DESCEND) {
    while (l < r) {
      while (arr[l][key] > pivot[key]) {
        l++;
      }
      while (arr[r][key] < pivot[key]) {
        r--;
      }
      if (l >= r) {
        break;
      }
      temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      if (arr[l][key] === pivot[key]) {
        r--;
      }
      if (arr[r][key] === pivot[key]) {
        l++;
      }
    }
  }

  if (l === r) {
    l++;
    r--;
  }
  if (left < r) {
    quickSort(arr, left, r, order, key);
  }
  if (right > l) {
    quickSort(arr, l, right, order, key);
  }
  return arr;
};

export default quickSort;
