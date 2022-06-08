/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/
function findOdd(A) {
  let count = {};
  A.forEach(v => {
    count[v] = count[v] ? count[v] + 1 : 1;
  });
  return +Object.keys(count).find(key => count[key] % 2 === 1);
}
function findOdd(arr) {
  var result, num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}