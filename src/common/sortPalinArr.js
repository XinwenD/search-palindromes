import { ASCEND, DESCEND, LENGTH, POSITION } from "./constants";
import quickSort from "./quickSort";

// Definition
//
// Arguments:
//
// -- arr: the palindrome array
//  arr = [
//     {
//         palindrome: String, the substring,
//         length: Integer, the length of substring,
//         position: Interger, the start position of substring
//     },
//     ...
//  ]
//
// -- order: the order options
//  order= {
//      sortKey: LENGTH/POSITION, // to sort the arr according to length/position column
//      length: ASCEND/DESCEND,   // to sort the length column in an ascending/descending order
//      position: ASCEND/DESCEND, // to sort the position column in an ascending/descending order
//  }
//
// Variables:
//
// -- size: Interger, arr length
//
// -- sortedArr: [Array], array to repulicate the sorted initial arr
//
// -- start: Integer, a pointer to set the start position for each group
//
//

const sortPalinArr = (arr, order) => {
  const size = arr.length;
  let sortedArr = [];
  let start = 0; // The start index for each secondary key group

  // there are two sort keys, "length" and "position"
  //
  // if primary sort key is "length", sort length first
  // then sort secondary key "position" in each length group
  // if primary sort key is "position", sort position first
  // then sort secondary key "length" in each position group
  if (order.sortKey === LENGTH) {
    // first sort the arr by primary key "length"
    quickSort(arr, 0, arr.length - 1, order.length, LENGTH);
    // console.log(arr);
    // loop over the sorted arr
    for (let i = 1; i < size; i++) {
      // the if condition means a group of substring with the same "length" ends;
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
      // the if condition below determines when to sort the last group of "length"
      // where i is pointing at the last element of the arr
      // start is pointing at the first element of this last group
      if (i === size - 1 && i >= start) {
        sortedArr.push(
          ...quickSort(
            arr.slice(start, size),
            0,
            size - start - 1,
            order.position,
            POSITION
          )
        );
        // console.log("@@", sortedArr);
      }
    }
    return sortedArr;
  } else if (order.sortKey === POSITION) {
    // first sort the arr by primary key "length"
    quickSort(arr, 0, arr.length - 1, order.position, POSITION);
    // loop over the sorted arr
    for (let i = 1; i < size; i++) {
      // the if condition means a group of substring with the same "position" ends;
      // need to sort this group; and start next group
      if (arr[i].position !== arr[i - 1].position) {
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
      // the if condition below determines when to sort the last group of "position"
      // where i is pointing at the last element of the arr
      // start is pointing at the first element of this last group
      if (i === size - 1 && i >= start) {
        sortedArr.push(
          ...quickSort(
            arr.slice(start, size),
            0,
            size - start - 1,
            order.length,
            LENGTH
          )
        );
      }
    }
    return sortedArr;
  }
};

// export the function
export default sortPalinArr;
