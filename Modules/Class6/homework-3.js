// Due date: Oct-13 (Thu) eod

// Q1: Print the length of the country name (without using string.length or length property from string-library)
// countryName.length;  <-- not allowed
let countryName = 'Japan';
let countryName_splitNothing = countryName.split('');
console.log(`Q1: Length of countryName -> ${countryName_splitNothing.length}\n`)



// Q2: find the number of words in the given sentence2
const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentence2_splitWords = sentence2.split(' ');
console.log(`Q2: Word count of sentence2 -> ${sentence2_splitWords.length}\n`)



// Q3: Create abbreviation for a 4-word sentence
const sentence3 = 'you Never waLK ALONe';
let abbr = '';
// code
// break it apart
let sentence3_splitWords = sentence3.split(' '); 
let sentence3_Word1 = sentence3_splitWords[0];
let sentence3_Word2 = sentence3_splitWords[1];
let sentence3_Word3 = sentence3_splitWords[2];
let sentence3_Word4 = sentence3_splitWords[3];

// get 1st Char of each word
let sentence3_Char1 = sentence3_Word1.charAt(0);
let sentence3_Char2 = sentence3_Word2.charAt(0);
let sentence3_Char3 = sentence3_Word3.charAt(0);
let sentence3_Char4 = sentence3_Word4.charAt(0);

// put it back together
abbr =  sentence3_Char1.concat(sentence3_Char2,sentence3_Char3,sentence3_Char4);
abbr = abbr.toUpperCase();
console.log(`Q3: abbr -> ${abbr}\n`);     // abbr -> YNWA



/**
 * Q4: Convert the string value in to Titlecase
 * 
 * 'you live Only once' -> You Live Only Once
 * 'you Never waLK ALONe' -> You Never Walk Alone
 * 'have a GrEAT daY' -> 'Have A Great Day'
 */
const sentence4 = 'have a GrEAT daY';
let sentence4_Titlecase = '';
// code
let sentence4_lowerCase = sentence4.toLowerCase();

// break it apart
let sentence4_splitWords = sentence4_lowerCase.split(' '); 
let sentence4_Word1 = sentence4_splitWords[0];
let sentence4_Word2 = sentence4_splitWords[1];
let sentence4_Word3 = sentence4_splitWords[2];
let sentence4_Word4 = sentence4_splitWords[3];

// TitleCase 1st Char of each word
let sentence4_Word1_TitleCase = sentence4_Word1.charAt(0).toUpperCase() + sentence4_Word1.slice(1);
let sentence4_Word2_TitleCase = sentence4_Word2.charAt(0).toUpperCase() + sentence4_Word2.slice(1);
let sentence4_Word3_TitleCase = sentence4_Word3.charAt(0).toUpperCase() + sentence4_Word3.slice(1);
let sentence4_Word4_TitleCase = sentence4_Word4.charAt(0).toUpperCase() + sentence4_Word4.slice(1);

// put it back together
sentence4_Titlecase = sentence4_Word1_TitleCase.concat(" ",sentence4_Word2_TitleCase," ",sentence4_Word3_TitleCase," ",sentence4_Word4_TitleCase)
console.log(`Q4: sentence4_Titlecase -> ${sentence4_Titlecase}`);   // sentence4_Titlecase -> Have A Great Day