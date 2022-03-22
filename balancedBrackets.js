/*
Balanced Brackets
Instructions:
Given a string, return true if it contains balanced (), {}, [], brackets and false otherwise.

*/

// Examples
console.log(
    isBalanced("(x +y) - (4)"), // true
    isBalanced("(((10) ()) ((?)(:)))"), // true
    isBalanced("[{()}]"), // true
    isBalanced("(50)("), // false
    isBalanced("[{]}"), // false
    isBalanced("}])"), // false
);

function isBalanced(str){
    const open = "([{";
    const close = ")]}";
    const stack = [];
    const matches = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (open.includes(char)) {
            stack.push(char);
        } else if (close.includes(char)) {
            const lastOpen = stack.pop();
            if (matches[char] !== lastOpen) {
                return false;
            }
        }
    }
    return !stack.length;
}