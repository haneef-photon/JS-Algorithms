/*
Write a function that takes in a string and returns a new string 
with all duplicate characters removed.
*/

console.log(
  removeDupes1("This is a test string"), // "This is a test string"
  removeDupes1("abababcdcdcd"),
  removeDupes1("aabbccdd")
);
console.log(
    removeDupes2("This is a test string"),
    removeDupes2("abababcdcdcd"),
    removeDupes2("aabbccdd")
  );
  console.log(
    removeDupes3("This is a test string"),
    removeDupes3("abababcdcdcd"),
    removeDupes3("aabbccdd")
  );3    
// Time: O(n)
// Space: O(n)
function removeDupes1(str) {
  const uniqueChars = {};
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!uniqueChars[str[i]]) {
      uniqueChars[str[i]] = true;
      newStr += str[i];
    }
  }
  return newStr;
}

// Time: O(n^2)
// Space: O(n)
function removeDupes2(str) {
  const uniqueChars = [];
  for (let i = 0; i < str.length; i++) {
    if (!uniqueChars.includes(str[i])) {
      uniqueChars.push(str[i]);
    }
  }
  return uniqueChars.join("");
}

// Time: O(n)
// Space: O(n)
function removeDupes3(str) { 
    return Array.from(new Set(str)).join("");
}