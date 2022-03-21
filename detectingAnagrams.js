/*

All Anagrams

Instructions:
Write a function that takes in an array of strings. Return true if all strings are anagrams of one another and false if even a single string is not an anagram of the others.

Input: Array of Strings
Output: Boolean

Examples

allAnagrams(['abcd', 'bdac', 'cabd']); // true
allAnagrams(['abcd', 'bdXc', 'cabd']); // false
allAnagrams(['abcd', 'bdac', 'cabd']); // true
allAnagrams(['abcd', 'bdXc', 'cabd']); // false

*/

console.log(
  allAnagrams(["abcde", "bdac", "cabd"]), // false
  allAnagrams(["abcd", "bdac", "cabd"]), // true
  allAnagrams(["abcd", "bdXc", "cabd"]), // false
  allAnagrams(["abcd", "bdac", "cabd"]), // true
  allAnagrams(["abcd", "bdXc", "cabd"]) // false
);

function getCharCount(str) {
  // O(s)
  // Create an object with count of all chars in string
  const charCount = {};
  for (let j = 0; j < str.length; j++) {
    const char = str[j];
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  return charCount;
}

function allAnagrams(strings) {

  // get char count of first string
  const firstCharCount = getCharCount(strings[0]); // O(s)

  for (let i = 1; i < strings.length; i++) {
    //
    // create object with char counts of current string
    const thisString = strings[i];
    const thisCharCount = getCharCount(thisString); // O(s)

    // length of char of both strings must be the same
    if (strings[0].length !== thisString.length) {
        return false;
    }
    // check if all chars in first string are in this string
    for (const char in thisCharCount) {
      if ((thisCharCount[char] !== firstCharCount[char])) {
        return false;
      }
    }
  }

  return true;
}

// Time: O(a * s)
// Space: O(s)
