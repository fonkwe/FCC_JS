// Problem: Telephone Number Validator
// Description: Return true if the passed string looks like 
//a valid US phone number.
//The user may fill out the form field any way they choose as 
//long as it has the format of a valid US number. 
//The following are examples of valid formats for US numbers 
//(refer to the tests below for other variants):


// Steps: 
//1. remove unwanted characters that is return only numbers.
//2. number format should be in the form 3numbers-3numbers-4numbers.
//3. 1 can be added to the number format.
//4. number length should be 11 characters long.



// Implementation:

// function telephoneCheck(str) {
//   return str.replace(/[[2-9]^[(][)]\d{3}$\d{3}$-\d{4}$]/g, '');
  // var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
    // const removedStr = /^([+]?1[\s]?)([(]{0,1}[0-9]{1,3}[)])(\d{3}$\d{3}$-\d{4}$])/;
    // const re = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;
    const re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

  return re.test(str);
}

telephoneCheck("555-555-5555");
  
    

  
  console.log(telephoneCheck("555-555-5555"));






// Test:
// telephoneCheck("555-555-5555") should return a boolean.
// telephoneCheck("1 555-555-5555") should return true.
// telephoneCheck("1 (555) 555-5555") should return true.
// telephoneCheck("5555555555") should return true.
// telephoneCheck("555-555-5555") should return true.
// telephoneCheck("(555)555-5555") should return true.
// telephoneCheck("1(555)555-5555") should return true.
// telephoneCheck("555-5555") should return false.
// telephoneCheck("5555555") should return false.
// telephoneCheck("1 555)555-5555") should return false.
console.log(telephoneCheck("(555)555-5555")); //should return true.
console.log(telephoneCheck("1(555)555-5555"));//should return true
// telephoneCheck("123**&!!asdf#") should return false.
// telephoneCheck("55555555") should return false.
// telephoneCheck("(6054756961)") should return false.
// telephoneCheck("2 (757) 622-7382") should return false.
// telephoneCheck("0 (757) 622-7382") should return false.
// telephoneCheck("-1 (757) 622-7382") should return false.
// telephoneCheck("2 757 622-7382") should return false.
// telephoneCheck("10 (757) 622-7382") should return false.
// telephoneCheck("27576227382") should return false.
// telephoneCheck("(275)76227382") should return false.
console.log(telephoneCheck("2(757)6227382"));// should return false.
console.log(telephoneCheck("2(757)622-7382"));// should return false.
console.log(telephoneCheck("555)-555-5555"));// should return false.
console.log(telephoneCheck("(555-555-5555"));// should return false.
console.log(telephoneCheck("(555)5(55?)-5555")); //should return false.
console.log(telephoneCheck("55 55-55-555-5"));// should return false.
console.log(telephoneCheck("11 555-555-5555"));// should return false.