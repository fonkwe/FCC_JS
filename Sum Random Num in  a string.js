/*Problem: Given a random string consisting of numbers, letters,
 symbols, you need to sum up the numbers in the string.*/
/* Consecutive integers should be treated as a single number.
 eg, 2015 should be treated as a single number 2015, 
 NOT four numbers
All the numbers should be treaded as positive integer.
 eg, 11-14 should be treated as two numbers 11 and 14.
  Same as 3.14, should be treated as two numbers 3 and 14
If no number was given in the string, it should return 0*/
// Steps:
//1. check for number inside the string.
//2. if number is not found, set a parameter.
//3. if number is found, then add the numbers.

function sumFromString(str){
    let arr = str.match(/\d+/g);// get number in the whole string.
    if (arr === null) {
      return 0;// if number not found.
    }
    else{
      let h = arr.reduce((a, b) => +a + +b);
      return +h;// + is to convert string to number
      //bcuz the reduce will return a as "num".
    }  
}

console.log(sumFromString("In 2015, I want to know how much does iPhone 6+ cost?")); //== 2021
console.log(sumFromString("1+1=2")); //== 4
console.log(sumFromString("e=mc^2")); //== 2





  