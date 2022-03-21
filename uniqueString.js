/*
Is a string unique or not
case sensitive
*/
console.log(
  isUnique1("abcdef"), // true
  isUnique1("89%df#$^a&x"), // true
  isUnique1("abcAdef"), // true
  isUnique1("abcdefa") // false
);
console.log(
  isUnique2("abcdef"), // true
  isUnique2("89%df#$^a&x"), // true
  isUnique2("abcAdef"), // true
  isUnique2("abcdefa") // false
);
console.log(
    isUnique3("abcdef"), // true
    isUnique3("89%df#$^a&x"), // true
    isUnique3("abcAdef"), // true
    isUnique3("abcdefa") // false
  );
  console.log(
    isUnique4("abcdef"), // true
    isUnique4("89%df#$^a&x"), // true
    isUnique4("abcAdef"), // true
    isUnique4("abcdefa") // false
  );
  
// Time: O(n * n) -> O(n^2)
// Space: O(1)
function isUnique1(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
}

// Time: O(n * log(n)) + O(n) -> O(n * log(n))
// Space: O(n)
function isUnique2(str) {
  const chars = str.split("").sort();
  for (var i = 1; i < chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      return false;
    }
  }
  return true;
}

// Time: O(n)
// Space: O(n)
function isUnique3(str) {
    const chars = {};

    for (let i = 0; i < str.length; i++) {
        const thisChar = str[i];

        if (chars[thisChar]) {
            return false;
        }
        chars[thisChar] = true;
    }
    return true;
  }

// Time: O(n)
// Space: O(n)
function isUnique4(str) {
   return new Set(str).size === str.length;
  }
