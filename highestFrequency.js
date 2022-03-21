/*
Function that takes an array of strings and returns the most frequently used word.
*/

console.log(
    highestFrequency1(["a", "b", "c", "d", "a"]),
    highestFrequency1(["a", "b", "c", "d"]),
    highestFrequency1(["abc", "abc", "def", "def", "def", "ghi", "ghi", "ghi", "ghi"]),
);

console.log(
    highestFrequency2(["a", "b", "c", "d", "a"]),
    highestFrequency2(["a", "b", "c", "d"]),
    highestFrequency2(["abc", "abc", "def", "def", "def", "ghi", "ghi", "ghi", "ghi"]),
);

function highestFrequency1(arr) {
    const wordCount = {};
    let max = 0;
    let maxWord = "";

    for (let i = 0; i < arr.length; i++) {
        if (!wordCount[arr[i]]) {
            wordCount[arr[i]] = 1;
        } else {
            wordCount[arr[i]] += 1;
        }

        if (wordCount[arr[i]] > max) {
            max = wordCount[arr[i]];
            maxWord = arr[i];
        }
    }
    return maxWord;
}

function highestFrequency2(str){

}