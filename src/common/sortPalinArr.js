import { ASCEND, DESCEND, LENGTH, POSITION } from "./constants";
import quickSort from "./quickSort";

// Definition of Variables
//
// arr: the palindrome array
// arr = [
//    {
//        palindrome: substring,
//        length: the length of substring,
//        position: the start position of substring
//    },
//    ...
// ]
//
// order: the order options
// order= {
//    sortKey: LENGTH/POSITION, // to sort the arr according to length/position column
//    length: ASCEND/DESCEND,   // to sort the length column in an ascending/descending order
//    position: ASCEND/DESCEND, // to sort the position column in an ascending/descending order
// }

const sortPalinArr = (arr, order) => {
  const size = arr.length;
  let sortedArr = [];
  let start = 0; // The start index for each length group

  if (order.sortKey === LENGTH) {
    // first sort the arr by length
    quickSort(arr, 0, arr.length - 1, order.length, LENGTH);
    // console.log(arr);
    // loop over the sorted arr
    for (let i = 1; i < size; i++) {
      // this condition means a group of same length ends;
      // need to sort this group; and start next group
      if (arr[i].length !== arr[i - 1].length) {
        // debugger;

        sortedArr.push(
          ...quickSort(
            arr.slice(start, i),
            0,
            i - start - 1,
            order.position,
            POSITION
          )
        );
        start = i;
        // console.log("@", sortedArr);
      }
      if (i === size - 1 && i >= start) {
        sortedArr.push(
          ...quickSort(
            arr.slice(start, size),
            0,
            i - start - 1,
            order.position,
            POSITION
          )
        );
        // console.log("@@", sortedArr);
      }
    }
    return sortedArr;
  } else if (order.sortKey === POSITION) {
    quickSort(arr, 0, arr.length - 1, order.position, POSITION);
    for (let i = 1; i < size; i++) {
      if (arr[i].length !== arr[i - 1].length) {
        sortedArr.push(
          ...quickSort(
            arr.slice(start, i),
            0,
            i - start - 1,
            order.length,
            LENGTH
          )
        );
        start = i;
      }
      if (i === size - 1 && i >= start) {
        sortedArr.push(
          ...quickSort(
            arr.slice(start, size),
            0,
            i - start - 1,
            order.length,
            LENGTH
          )
        );
      }
    }
    return sortedArr;
  }
};

export default sortPalinArr;
