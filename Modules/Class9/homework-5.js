// Due date : Oct-19 EOD

/**
 * Q1. Find the average of the given numbers-array
 * 
 * [1,2,3,4,5] -> 15/5 -> 3
 * [1, -1, 2, -3, 1] -> 0/5 -> 0
 * [1, 2, 1, 1, 3, 1, 2] -> 11/7 -> 1.xxx
 * [23, 12, 43, 10, 5, -10]  -> 83/6 -> 13.833
 * 
 */
let numbers = [1, 2, 1, 1, 3, 1, 2];
let sum = 0
for (let i=0 ; i < numbers.length ; i++) {
    sum = sum + numbers[i];
}
let average = (sum/numbers.length)
console.log(`\n\n${sum}/${numbers.length} -> ${average}`);

/**
 * Q2. Reverse a given string (word by word)
 * 
 * 'have a great day' -> day great a have
 * 'good morning' -> morning good
 * 'Learn' -> Learn
 * 
 * 
 */
let str2 = 'have a great day'   // day great a have
let reverseStr2 = '';
// code
let str2Array = str2.split(" ");   // convert string to array
let reverseStr2Array = [];         // define Array for words in reverse
for (let indX=0 ; indX < str2Array.length ; indX++) {   // loop for the length of the phrase
    reverseStr2Array[indX] = str2Array[str2Array.length-1-indX];   // copy the words to the reverse position
}
for (let indX=0 ; indX < reverseStr2Array.length ; indX++) {   // loop for the length of the phrase
    reverseStr2 = reverseStr2 + reverseStr2Array[indX] + " "  // copy the words from the Array to the string
}
reverseStr2 = reverseStr2.trim();   // clean up extra spaces
console.log(`\n\nreverseStr2 -> ${reverseStr2}`);   // print reverse string


/**
 * Q3. Create abbreviation for a sentence
 * 
 * 'you live Only once' -> YLOO
 * 'you Never waLK ALONe every day' -> YNWAED
 * 'good Morning' -> 'GM'
 * 'hello dear, how are you doing?' -> HDHAYD
 */
let str3 = 'you Never waLK ALONe every day';
let abbr = '';
// code
let str3Array = str3.split(" ");   // convert string to array
for (let indX=0 ; indX < str3Array.length ; indX++) {   // loop for the length of the phrase
    abbr = abbr + str3Array[indX].charAt(0).toUpperCase()  // copy the first letter to the abbr
}
console.log(`\n\nabbr -> ${abbr}`);     // print abbreviation