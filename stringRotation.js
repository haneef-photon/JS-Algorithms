/*
Function that takes in 2 strings and returns true if 
one string is a rotation of the other.
*/

console.log(
    stringRotation1("waterbottle", "erbottlewat"),
    stringRotation1("waterbottle", "erbottlewaa"),
    stringRotation1("hello", "there"));


function stringRotation1(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    return (str1 + str1).includes(str2);
}