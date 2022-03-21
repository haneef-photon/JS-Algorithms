/*
Instructions:
Write a function that takes a square matrix as input.
A square matrix has the same number of rows and columns,
e.g. 3 x 3, 4 x 4, 5 x 5. It should return the same
matrix rotated 90 degrees clockwise. The rotation should
happen in place, meaning you may not create any extra
matrixes or arrays in your function.

Bonus: Write a function that rotates a square matrix
in place counter-clockwise.

Input: Array of arrays of numbers
Output: Array of arrays of numbers
*/

console.log(
    rotateClockwise([   // -> [
        [1, 2, 3],      //      [7, 4, 1],
        [4, 5, 6],      //      [8, 5, 2],
        [7, 8, 9]       //      [9, 6, 3]
    ])                  //    ]
);
console.log('\n -------------------------------------'); 
console.log(
    rotateCounterClockwise([   // -> [
        [1, 2, 3],             //      [3, 6, 9],
        [4, 5, 6],             //      [2, 5, 8],
        [7, 8, 9]              //      [1, 4, 7]
    ])                         //    ]
);
console.log('\n -------------------------------------'); 
console.log(
    rotateClockwise([
        [ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10],
        [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
        [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
        [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
        [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
        [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
    ])
);

function rotateClockwise(matrix) {
  const totalLayers = Math.floor(matrix.length / 2);
  
  for(let layer = 0; layer < totalLayers; layer++) {
    const lastIndex = matrix.length - 1 - layer;

    for(
      let forwardIterator = layer + 1;
      forwardIterator < matrix.length - layer;
      forwardIterator++
    ) {
      const reverseIterator = lastIndex - forwardIterator + layer;

      let tmp1 = matrix[forwardIterator][lastIndex];
      matrix[forwardIterator][lastIndex] = matrix[layer][forwardIterator];

      const tmp2 = matrix[lastIndex][reverseIterator];
      matrix[lastIndex][reverseIterator] = tmp1;

      tmp1 = matrix[reverseIterator][layer];
      matrix[reverseIterator][layer] = tmp2;

      matrix[layer][forwardIterator] = tmp1;
    }
  }

  return matrix;
}

// Time: O(n)
// Space: O(1)

function rotateCounterClockwise(matrix) {
    return (
        rotateClockwise(
            rotateClockwise(
                rotateClockwise(matrix)
            )
        )
    );
}

// Time: O(n)
// Space: O(1)

