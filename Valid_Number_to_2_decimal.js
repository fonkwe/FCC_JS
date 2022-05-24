// Problems: 7 kyu Valid number to 2 decimal places

//Description: Check that a number is a valid number that has been given to 2 decimal places. 
 //The number passed to the function will be given as a string. 
 //If the number satisfies the criteria below, the function should return true, else it should return false.
 /* Please check the criteria for a valid number:

optional + or - symbol in front
optional digits before a decimal point (digits are characters ranging from '0' to '9')
a decimal point
exactly two digits after the point
nothing else
*/

//Steps

//Implemetation
function validNumber(num){
    return /^[+-]?\d*\.\d\d$/.test(num)
    //return true or false;
  }
//   function validNumber(num){
//     var arr=num.split('.');
//     if (arr.length!=2 || arr[1].length!=2)
//       return false;
//     for (var i=0; i<arr[0].length; ++i)
//     {
//       if (i==0)
//       {
//         if (arr[0][i]!='+' && arr[0][i]!='-'  && (arr[0][i]<'0' || arr[0][i]>'9'))
//           return false;
//       }
//       else
//         if (arr[0][i]<'0' || arr[0][i]>'9')
//           return false;
//     }
//     for (var i=0; i<arr[1].length; ++i)
//       if (arr[1][i]<'0' || arr[1][i]>'9')
//         return false;
//     return true;
//   }



//test
console.log(validNumber("0.00"));//,true)
console.log(validNumber(".00"));//,true)
console.log(validNumber("-.00"));//,true)
console.log(validNumber(".30"));//,true)
console.log(validNumber("0.40"));//,true)
console.log(validNumber("34443.33"));//,true)

console.log(validNumber(".0a"));//,false)
console.log(validNumber("1.00."));//,false)
console.log(validNumber(".+00"));//,false)
console.log(validNumber("w.00"));//,false)
conlog.log(validNumber("..00"));//,false)
console.log(validNumber("1,00"));//,false)