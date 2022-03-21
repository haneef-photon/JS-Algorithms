/*
Rotate Matrix

Bonus: Write a function that rotates a matrix 180 degrees.
Bonus: Write a function that rotates a matrix 270 degrees.
*/

const matrix = [
    [1, 2],
    [3, 4]
  ];
  
  console.log( matrix);
  console.log(rotate90(matrix));  // -> [[3, 1], [4, 2]]
  console.log(rotate180(matrix)); // -> [[4, 3], [2, 1]]
  console.log(rotate270(matrix)); // -> [[2, 4], [1, 3]]
   
  function rotate90(mat) {
      // New matrix should have same number of rows and columns as original
      const newMatrix = [];
      for(let i = 0; i < mat[0].length; i++) {
          newMatrix.push([]);
      }
      
      for(let i = 0; i < mat.length; i++) {
          for(let j = 0; j < mat[0].length; j++) {
              newMatrix[j][mat.length - 1 - i] = mat[i][j];
          }
      }
      
      return newMatrix;
  }
  
  function rotate180(mat) {
      return rotate90(rotate90(mat)); // O(n)
  }
  
  function rotate270(mat) {
      return rotate90(rotate180(mat));
  }
  