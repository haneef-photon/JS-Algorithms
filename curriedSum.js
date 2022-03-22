// Versatile Add

// Instructions - Write a function that adds 2 numbers
// It should work as follow:
// add(2, 3) // 5
// add(2)(3) // 5
// add(2)(3)(4) // 9
// add(2)(3)(4)(5) // 14
// add()(3)()(4) // 7
// etc

/* 
You have to pass empty () at the end when you want to terminate 
the call and get the final value. 
*/
const sum =
  (...xs) =>
  (...ys) =>
    ys.length ? sum(...xs, ...ys) : xs.reduce((a, b) => a + b, 0);

console.log(
  sum(5)(),
  sum(5, 5)(),
  sum(5)(5, 5, 5)(),
  sum(5, 5, 5)(5)(5)(),
  sum(1)(4)(66)(35)(0)(),
  sum(1, 4, 66, 35, 0)()
);

/*****************************************************
 * Limitation with the solution below is that you cannot pass consecutive single values
*/

console.log(
  add(2, 3), // 5
  add(2)(3), // 5
  add()(3)()(4), // 7
  add(10)()()()(12), // 22
//   add(10)(10)()()(12) // limitation: will not work, should have been 32
);

function add(a, b) {
  if (a === undefined) {
    return add;
  }

  if (b === undefined) {
    return function innerAdd(c) {
      if (c === undefined) {
        return innerAdd;
      }
      return a + c;
    };
  }
  return a + b;
}
