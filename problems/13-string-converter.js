/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  let obj1= {};
  let stringSplit = string.split("");
  for (let i = 0; i < stringSplit.length; i++){
    let char = stringSplit[i];
    console.log(char);
    if(obj1[char] === undefined){
        obj1[char]=1;
    }else{
    obj1[char]++
    }
  }
  return obj1;
}
console.log(stringConverter("raccoon"));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
