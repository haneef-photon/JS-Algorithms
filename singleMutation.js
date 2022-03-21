/*

Single Mutation

Instructions:
There are 3 types of possible string mutations:
character insertion, character deletion, or
character substitution. Write a function that
accepts 2 strings and returns true if the strings
are the same except for 0 or 1 mutations.
Return false otherwise.

Inputs: String, String
Output: Boolean

Examples:

Single Deletion:
'abcd', 'abc'
'abcd', 'acd'

Single Insertion:
'abcd', 'abcde'
'abcd', 'abXcd'

Single Substitution:
'abcd', 'abXd'
'abcd', 'Xbcd'

*/

console.log(
  singleMutation("abcd", "ad"), // -> false two deletions
  singleMutation("abcd", "abXcdX"), // -> false two insertions
  singleMutation("abcd", "aXXd"), // -> false two substitutions
  singleMutation("abcd", "abcd"), // -> true Single Deletion
  singleMutation("abcd", "abcde"), // -> true Single Insertion
  singleMutation("abcd", "abXd"), // -> true Single Substitution
  singleMutation("abcd", "Xbcd") // -> true Single Substitution
);
function singleMutation(str1, str2) {
  let mutations = 0;

  for (let i = 0, j = 0; i < str1.length || j < str2.length; i++, j++) {
    // O(n)
    if (str1[i] !== str2[j]) {
      mutations++;

      // max of 1 mutation
      if (mutations > 1) {
        return false;
      }

      // if its a deletion, move the str2 pointer back to make up for deletion
      if (str1.length > str2.length) {
        j--;
        // if its an insertion, move the str1 pointer back to make up for insertion
      } else if (str1.length < str2.length) {
        i--;
      }
    }
  }

  return true;
}

// Time: O(n)
// Space: O(1)
