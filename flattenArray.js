/*
Write a function that will take an array of deeply
nested arrays and extract every item, flattening the array.

flatten([[[ [1], 2], 3], [4], [], [[5]]) // [1, 2, 3, 4, 5]
*/

console.log(flatten1([[[[1], 2], 3], [4], [], [[5]]]));
console.log(flatten1([1, 2, [3,4], 5]));
console.log(flatten1([1, 2, 3, 4, 5]));
console.log("");
console.log(flatten2([[[[1], 2], 3], [4], [], [[5]]]));
console.log(flatten2([1, 2, [3,4], 5]));
console.log(flatten2([1, 2, 3, 4, 5]));

// Time: O(n)
// Space: O(n)
function flatten1(nestedArray) {
  const flattenedArray = [];

  for (let i = 0; i < nestedArray.length; i++) {
      const currentItem = nestedArray[i];

    if (Array.isArray(currentItem)) {
      const flatItem = flatten1(currentItem);
      for(let j = 0; j < flatItem.length; j++) {
        flattenedArray.push(flatItem[j]);
      }
    } else {
      flattenedArray.push(currentItem);
    }
  }
  return flattenedArray;
}

function flatten2(nestedArray) {
    return nestedArray.flat(Infinity);
  }