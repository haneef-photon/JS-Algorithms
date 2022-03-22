/*

Sorted Search

Instructions:
Write a function that accepts a sorted array of integers
and a number. Return that number's index in the array
if present. The function should return -1 for target
values not in the array.

Input: Array of Integers, Integer
Output: An integer >= -1

*/

// Examples:
console.log(search([1, 3, 6, 13, 17], 13)); // -> 3
console.log(search([1, 3, 6, 13, 17], 12)); // -> -1

function search(numbers, target) {
    let startIndex = 0;
    let endIndex = numbers.length - 1;
    
    if(target < numbers[startIndex] || target > numbers[endIndex]) {
        return -1;
    }
    
    while(1) {
        if(target === numbers[startIndex]) {
            return startIndex;
        }
        
        if(target === numbers[endIndex]) {
            return endIndex;
        }
        
        if(endIndex - startIndex <= 1) {
            return -1;
        }
        
        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        const middleNumber = numbers[middleIndex];
        
        if(target > middleNumber) {
            startIndex = middleIndex + 1;
        } else if (target < middleNumber) {
            endIndex = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }
}

// Time: O(log(n))
// Space: O(1)
