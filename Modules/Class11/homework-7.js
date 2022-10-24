// Due date -> Oct 23 eod

/**
 * Q1. Create a function to generate abbreviation for a sentence
 * 
 * Return the final result
 * 
 * 'you live Only once' -> YLOO
 * 'you Never waLK ALONe every day' -> YNWAED
 * 'good Morning' -> 'GM'
 * 'hello dear, how are you doing?' -> HDHAYD
 */

 function abbrvSent (userInputString) {
    let abbrvString = '';   // define the return variable
    let wordArray = userInputString.split(' ');   // convert userInputString to an array
    for (let indX=0 ; indX < wordArray.length ; indX++) {   // loop for the length of the array
        abbrvString = abbrvString + wordArray[indX].charAt(0).toUpperCase();  // copy the first letter to abbrvString
        };
    return abbrvString;  // return the abbrveviation string
}

console.log('\n');
console.log('---Q1---');
console.log(abbrvSent('you live Only once'));
console.log(abbrvSent('you Never waLK ALONe every day'));
console.log(abbrvSent('good Morning'));
console.log(abbrvSent('hello dear, how are you doing?'));





/**
 * Q2. Create a function to reverse a given string (word by word)
 * 
 * 'have a great day' -> day great a have
 * 'good morning' -> morning good
 * 'Learn' -> Learn
 */
/**
 * 1. what is the purpose of the function?
 *      reverse string word by word (reverseWordString , reverseStringByWord)
 * 
 * 2. Do I need any input from user? -> Yes
 *      If Yes,
 *          a) How many inputs I need from user? 1 (string)
 * 
 * 3. Should I return any value back to user at the end of operation/function? -> Yes
 *      If Yes,
 *          what is the datatype of returned value -> string (reversedString)
 */
function reverseStringByWord (userInput) {
    let resultString = '';

    const arr2 = userInput.split(' ');
    for (let i=arr2.length-1 ; i >= 0 ; i--) { 
        resultString = resultString + arr2[i] + ' ';
    }
    return resultString.trim();
}
console.log('\n');
console.log('---Q2---');
console.log(reverseStringByWord('have a great day'));


/**
 * Q3. Create a function to convert the string value in to Titlecase
 * 
 * Return the final result
 * 
 * 
 * 'you live Only once' -> You Live Only Once
 * 'you Never waLK ALONe' -> You Never Walk Alone
 * 'have a GrEAT daY' -> 'Have A Great Day'
 */

 function titleCase (userInputString) {
    let titleCaseString = '';   // define the return variable
    let wordArray = userInputString.split(' ');   // convert userInputString to an array
    for (let indX=0 ; indX < wordArray.length ; indX++) {   // loop for the length of the array
        wordArray[indX] = wordArray[indX].substring(0,1).toUpperCase() + wordArray[indX].slice(1).toLowerCase();  // make 1st char UC, rest LC
        };
    titleCaseString = wordArray.join(' ');   // join words with spaces to make final string
    return titleCaseString;  // return the title case string
}

console.log('\n');
console.log('---Q3---');
console.log(titleCase('you live Only once'));
console.log(titleCase('you Never waLK ALONe every day'));
console.log(titleCase('have a GrEAT daY'));
console.log('\n');