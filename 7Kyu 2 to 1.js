//Problem: 7 kyu Two to One

//Descriptiom: Take 2 strings s1 and s2 including only letters from a to z. 
//Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//Steps
//0.split s1 and s2
//1.merge s1 and s2
//2.filter array to removed duplicate items.
//3.return array without duplicate items

//Implemetation

function longest(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  // let arr3 = s1.concat(s2).split('').sort();
  // return [...new Set(arr3)].join('');
  let arr3 = arr1.concat(arr2);
  let arr4 = arr3.sort();
  let arr5 = arr4.join('');
  let arr6 = arr4.filter((c,index) => {
    return arr5.indexOf(c) === index;
  }).join('');
  return arr6;
 
}







//Test
console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); //"abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions")); // "acefghilmnoprstuy")
