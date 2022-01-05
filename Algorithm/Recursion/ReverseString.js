//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringRecursive(str) {
    if(str.length === 0) return "";
    return str[str.length-1] + reverseStringRecursive(str.substring(0, str.length - 1));
}
function reverseStringInterative(str) {
    let strArr = str.split("");;
    let result = "";
    while (strArr.length > 0) {
        result += strArr.pop();
    }
    return result;
}
console.log(reverseStringRecursive('yoyo mastery'));
console.log(reverseStringInterative('yoyo mastery'));
//should return: 'yretsam oyoy'