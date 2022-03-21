/* Function to find array subset */

console.log(
    arraySubset1([1, 2, 3, 4, 5], [1, 2, 3]), // true
    arraySubset1([2, 1, 1, 3], [1, 2, 3]), // true
    arraySubset1([1, 2], [1, 2, 3]), // false
    arraySubset1([1, 2, 3], [1, 2, 2, 3]), // false
    arraySubset1([1, 2, 3], [1, 1, 1]), // false because 1 appears thrice in the second array but just once in the first
);

console.log(
    arraySubset2([1, 2, 3, 4, 5], [1, 2, 3]), // true
    arraySubset2([2, 1, 1, 3], [1, 2, 3]), // true
    arraySubset2([1, 2], [1, 2, 3]), // false
    arraySubset2([1, 2, 3], [1, 2, 2, 3]), // false
    arraySubset2([1, 2, 3], [1, 1, 1]), // false because 1 appears thrice in the second array but just once in the first
);

// Time: O(m + n)
// Space: O(m)
function arraySubset1( superSet, subSet){
    if(superSet.length < subSet.length){
        return false;
    }

    const count = {};

    for (let i =0; i < superSet.length; i++){
        if(!count[superSet[i]]){
            count[superSet[i]] = 1;
        } else {
            count[superSet[i]] += 1;
        }
    }

    for (let i = 0; i < subSet.length; i++){
        if(!count[superSet[i]]){
            return false;
        } else {
            count[subSet[i]] -= 1;
        }
        if(count[subSet[i]] < 0){
            return false;
        }
    }
    return true;
}

// This will work for any data type not just primitive nums and strs
function arraySubset2( superSet, subSet){
    if(superSet.length < subSet.length){
        return false;
    }

    const count = new Map();

    for (let i =0; i < superSet.length; i++){
        if(!count.has(superSet[i])){
            count.set (superSet[i], 1);
        } else {
            count.set(superSet[i], count.get(superSet[i]) + 1);
        }
    }

    for (let i = 0; i < subSet.length; i++){
        if(!count.has(subSet[i])){
            return false;
        } else {
            count.set(superSet[i], count.get(superSet[i]) - 1);
        }
        if(count.get(subSet[i]) === 0){
            count.delete(subSet[i]);
        }
    }
    return true;
}