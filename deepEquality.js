/*
Deep Equals
Instructions
Write a function that will take in two items of any type.
The function should perform a deep equality check.

Inputs: Any, Any
Output: Boolean

Hints
Deep equality is used to check equivalence of objects and arrays.
Because of the concept of value vs. reference in JavaScript, the
equality operators (==, ===) can’t help us. They’ll always return
false for two different arrays or objects even if they contain the
same items.

It’s entirely possible to have objects or arrays nested several
levels deep. Our function will have to drill all the way down
into every object.
*/

function deepEquals(a, b) {
    // 1. if both are NaN
    if(Number.isNaN(a) && Number.isNaN(b)) {
        return true;
    }
    
    // 2. if different types
    if(typeof a !== typeof b) {
        return false;
    }
    
    // 3. if they are not objects or if either one is null
    if(typeof a !== 'object' || a === null || b === null) {
        return a === b;
    }
    
    // 4. ensure a, b, have same # of properties
    if(Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }

    // 5. loop through, ensure all keys and values are identical
    for(const key in a) {
        if(!deepEquals(a[key], b[key])) {
            return false;
        }
    }    
    
    return true;
}