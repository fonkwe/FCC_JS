/* Problem: ThinkFul 8kyu return longest word
Complete the function that takes one argument, 
a list of words, and 
returns the length of the longest word in the list.*/
// Requirement: Do not modify the input list.
// Steps: 1. set a word in the list to be the longest.
// 2. enter the list and compare each word length with the word set.
//3. get the longest word.

function longest(words) {
    console.log("This is the type of words: " + typeof words);
    let longest = words[0];//set longest word to an initial value.
    for (let i = 0; i < words.length; i++) { // loop through the word list
        if (longest.length < words[i].length) { // compare the l.W.l to the individual List word length
            longest = words[i]; //if compare is passed then set a new value as l.word length.
            console.log("This is the type of longest: " + typeof longest);
        }
    }
    console.log("This is the type of longest.length: " + typeof longest.length)
    return longest.length;
}
 
console.log(longest(['simple', 'is', 'better', 'than', 'complex']));// 7
console.log(longest(['explicit', 'is', 'better', 'than', 'implicit']));//8
console.log(longest(['beautiful', 'is', 'better', 'than', 'ugly']));//9