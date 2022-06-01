function palindrome(str) {
    let creatingArray = str.toLowerCase().replace(/[\W_]/g, '');
    let newArray = creatingArray.split("").reverse().join("");
    if(creatingArray == newArray) {
        return true;
    }
    else {
        return false;
    }
  }
  
  
  
  
console.log(palindrome("eye"));// should return true.
console.log(palindrome("eye"));// should return a boolean.
console.log(palindrome("eye")); //should return true.
console.log(palindrome("_eye")); //should return true.
console.log(palindrome("race car"));// should return true.
console.log(palindrome("not a palindrome"));//should return false
console.log(palindrome("nope"));// should return false.
console.log(palindrome("almostomla"));// should return false.
console.log(palindrome("My age is 0, 0 si ega ym."));// should return true.
console.log(palindrome("1 eye for of 1 eye."));// should return false.
console.log(palindrome("0_0 (: /-\ :) 0-0")); //should return true.
console.log(palindrome("five|\_/|four")); // should return false.