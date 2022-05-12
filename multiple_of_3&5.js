// Problem: 6 kyuMultiples of 3 or 5
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
//The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
//Additionally, if the number is negative, return 0 (for languages that do have them).
//Note: If the number is a multiple of both 3 and 5, only count it once.

//Steps: 1. Find out multiple of 3 and 5.
//2. add the multiple of both 3 and 5.
//3. display their sum of both multiples.


function solution(number){
//The multiples of 3 are :3, 6, 9, 12, 15, 18, 21, 24, 27, 30.
//The multiples of 5 include 5, 10, 15, 20, 25, 30, 35, 40
    let sum = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
    
  }
console.log(solution(10,23));