/**
 * Due date : Oct-9 (Sun) eod
 */
 const sentence1 = 'Hello Dear, how are you doing?';
 let result1 = 0;
 /**
  * if the length of sentence1 is greater than or equals to 10
  *      assign 15 in the result1
  * otherwise
  *      assign 10 in the result1
  */
 result1 = sentence1.length >= 10?15:10;
 console.log(`\nresult1 -> ${result1}\n\n`);

 const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
 /**
  * replace all instances of a or A with 'Alpha', print the result in console.
  */
 
 let sentence2_Alpha = sentence2.replace(/a/ig, 'Alpha');
 console.log(`sentence2_Alpha -> ${sentence2_Alpha}\n\n`);
 
  /**
  * HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.
  */

 const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 //print the result in console:
 // 1. the length of sentence-3
  let sentence3_Length = sentence3.length;
  console.log(`sentence3_Length -> ${sentence3_Length}\n`);

 // 2. does sentence-3 starts with 'HeaLTh' (ignore cases)
  let sentence3_StartsWithPattern = sentence3.toLowerCase().startsWith("HeAlTh".toLowerCase());
  console.log(`sentence3_StartsWithPattern -> ${sentence3_StartsWithPattern}\n`);

 // 3. does sentence-3 contains with 'Body' (ignore cases)
  let sentence3_IncludesPattern = sentence3.toLowerCase().includes("Body".toLowerCase());
  console.log(`sentence3_IncludesPattern -> ${sentence3_IncludesPattern}\n`);

  // 4. index of 'BoDy' in sentence3  (ignore cases)
  let sentence3_IndexOfPattern = sentence3.toLowerCase().indexOf("BoDy".toLowerCase());
  console.log(`sentence3_IndexOfPattern -> ${sentence3_IndexOfPattern}\n`);
 
  // 5. the last-character in sentence-3
  let sentence3_LastChar = sentence3.charAt(sentence3.length-1);
  console.log(`sentence3_LastChar -> ${sentence3_LastChar}\n`);
 
  // 6. word 'BoDy' is present only once. (true or false)
  let sentence3_FirstindexOf = sentence3.indexOf(`BoDy`);
  let sentence3_LastindexOf = sentence3.lastIndexOf(`BoDy`);
  let sentence3_DoesPatternRepeat = sentence3_LastindexOf != sentence3_FirstindexOf && sentence3_LastindexOf != -1 ? "True" : "False";
  console.log(`sentence3_DoesPatternRepeat -> ${sentence3_DoesPatternRepeat}\n`);
