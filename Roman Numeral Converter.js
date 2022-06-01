// Roman Numeral Converter
// Convert the given number into a roman numeral.
// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    let romanMatrix = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
      ];
    if (num === 0) {
        return '';
      }
      for (var i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
          return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
          
        }
    }
    
   }
   
   console.log(convertToRoman(36));





//Test
console.log(convertToRoman(2));// should return the string II.
console.log(convertToRoman(3));// should return the string III.
console.log(convertToRoman(4));// should return the string IV.
console.log(convertToRoman(5));// should return the string V.
console.log(convertToRoman(9));// should return the string IX.
console.log(convertToRoman(12));// should return the string XII.
console.log(convertToRoman(16)); //should return the string XVI.
console.log(convertToRoman(29));// should return the string XXIX.
console.log(convertToRoman(44));// should return the string XLIV.
console.log(convertToRoman(45));// should return the string XLV.
console.log(convertToRoman(68));// should return the string LXVIII
console.log(convertToRoman(83));// should return the string LXXXIII
console.log(convertToRoman(97));// should return the string XCVII
console.log(convertToRoman(99));// should return the string XCIX
console.log(convertToRoman(400));// should return the string CD
