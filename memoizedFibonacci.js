/*
Memoized Fibonacci

Instructions:
Write a function that will take a positive integer n
and return an array of length n containing the
Fibonacci Sequence.

Input: Integer > 0
Output: Array of Numbers
*/

function fibonacci(n) {
    const seq = [1, 1];
  
    if(n < 2) {
        return seq.slice(0, n);
    }
    
    while(seq.length < n) {
        const lastItem = seq[seq.length - 1];
        const secondLastItem = seq[seq.length - 2];

        seq.push(lastItem + secondLastItem);
    }
    
    return seq;
}

const memoized = (function () {
    const seq = [1, 1, 2, 3, 5, 8, 13, 21];
  
    return function(n) {
        if(seq.length > n) {
            return seq.slice(0, n);
        }
        
        while(seq.length < n) {
            const lastItem = seq[seq.length - 1];
            const secondLastItem = seq[seq.length - 2];

            seq.push(lastItem + secondLastItem);
        }
        
        return seq;
    }
})(); // IIFE

// When IIFE is run, it will return a function
// that will be stored in the variable memoized
// This function (memoized) will have access to the seq array even after it is returned
// This is called a closure
// So when the memoized function is called, 
// it will not calculate the seq array again from the beginning and just adds to it
// hence it is memoized and will not calculate the seq array again

console.time('naive');
for(let i = 0; i < 10000; i++) {
    fibonacci(10000);
}
console.timeEnd('naive');

console.time('memoized');
for(let i = 0; i < 10000; i++) {
    memoized(10000);
}
console.timeEnd('memoized');