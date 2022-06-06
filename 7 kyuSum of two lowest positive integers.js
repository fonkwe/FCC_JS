// Problems: 7 kyuSum of two lowest positive integers

// Description: Create a function that returns the sum of 
//the two lowest positive numbers 
//given an array of minimum 4 positive integers. 
//No floats or non-positive integers will be passed.
//For example, when an array is passed like [19, 5, 42, 2, 77], 
//the output should be 7.
//[10, 343445353, 3453445, 3453545353453] should return 3453455.

//Steps: 
//1.Find the 2 minimum interger numbers
//2.add the 2 numbers
//3 return their value.

//Implementations:
function sumTwoSmallestNumbers(numbers) { 
    const sum = numbers.sort(function(a, b) {
        return a - b;
    });
    return sum[0] + sum[1];
  }
  


//Test
 
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13 "Sum should be 13"
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6 "Sum should be 6"
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); // 10 "Sum should be 10"