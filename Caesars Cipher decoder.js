// Problems: Caesars Cipher decoder

//Description: One of the simplest and most widely known ciphers is a Caesar cipher,
// also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//A common modern use is the ROT13 cipher, where the values of the letters are
// shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
//Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 
//Steps: 
//1: Declare a container to hold all characters in the alphabet.
//2: Declare a matching container to hold all character of the alphabet to 13 place.
//3: loop throught each declaration.
//4: Compare the position of the characters in each declaration and push.
//5: repeat until sentence length is reached. (For loop).
//6: return result.


//Implementation:
function rot13(str) {
  let alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    // character has been set to 13 places from the initial character.
    let alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    var resultStr = [];
    for(let i=0; i<str.length; i++){
        for(let j =0; j<alphabets.length; j++){
            if(str[i] === alphabets[j]){
            resultStr.push(alphabets13[j]);
            }
        }
    }
    return resultStr.join("");
}

console.log(rot13("SERR PBQR PNZC"));


  
  