//  Due: Fri (Oct 21)

/**
 * Q1. Print the object data as mentioned above.
 * 
    name : John Doe
    state : NJ
    age : 20
    gender : M
    paymentMethod : finance
    anyExperience : true
    pastJobs : Yes (3)
        companyName : ABC
        numOfYears : 2
        title : 'DEF'

        companyName : EFG
        numOfYears : 3
        title : 'HIJ'
        
        companyName : KLM
        numOfYears : 4
        title : 'NOP'
    knownSkills : 5 (Java, Manual testing, Js basics, Programming, CS basics)

    name : Eli hen
    state : NY
    age : 22
    gender : F
    paymentMethod : Paid
    anyExperience : false
    pastJobs : No
    knownSkills : 3 (Java, Manual testing, CS basics)
*/


//  STUDENT DATA     //
let student1_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

let student1_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}


//  PSEUDO CODE //
//  use console.log to print array values
//
//  check if any past jobs 
//      no past jobs
//            print `pastJobs : No`
//      yes past jobs
//          use for loop to print each job's data
//
//  create a varible knownSkills in which to build the desired string
//      use a for loop to add each skill to the knownSkills string
//  print the completed string



//  STUDENT 1-1 CODE    //
console.log(`\nname : ${student1_1.name}`);     // name : John Doe
console.log(`state : ${student1_1.state}`);     // state : NJ
console.log(`age : ${student1_1.age}`);     // age : 20
console.log(`gender : ${student1_1.gender}`);     // gender : M
console.log(`paymentMethod : ${student1_1.paymentMethod}`);     // paymentMethod : finance
console.log(`anyExperience : ${student1_1.anyExperience}`);     // anyExperience : true

if (student1_1.pastJobs.length === 0 ) {        // pastJobs is 0
    console.log(`pastJobs : No`);               // pastJobs : No
}else{                                          // pastJobs is not 0
    console.log(`pastJobs : Yes (${student1_1.pastJobs.length})`);               // pastJobs : Yes
    for (let jobIndex = 0 ; jobIndex < student1_1.pastJobs.length ; jobIndex++) {
        console.log(`     companyName : ${student1_1.pastJobs[jobIndex].companyName}`);     // companyName
        console.log(`     numOfYears : ${student1_1.pastJobs[jobIndex].numOfYears}`);     // numOfYears
        console.log(`     title : ${student1_1.pastJobs[jobIndex].title}`);     // title
        if (jobIndex === student1_1.pastJobs.length-1) {
            break;          //   to stop/break loop
        }
        console.log(`\n`);     // new line
    }
}

let skillString = 'knownSkills : ' + student1_1.knownSkills.length + ' (';      // start skillString
for (let skillIndex = 0 ; skillIndex < student1_1.knownSkills.length ; skillIndex++) {
    skillString = skillString + student1_1.knownSkills[skillIndex];     // add skills to skillString
    if (skillIndex === student1_1.knownSkills.length-1) {
        break;          //   exit at last skill
    }
    skillString = skillString + ', ';     // add ', ' after each skill
}
skillString = skillString +  ')';    // close skillString
console.log(skillString);    // print skillString
console.log(`\n\n`);     // new lines


// STUDENT 1-2 CODE   //
console.log(`\nname : ${student1_2.name}`);     // name
console.log(`state : ${student1_2.state}`);     // state
console.log(`age : ${student1_2.age}`);     // age
console.log(`gender : ${student1_2.gender}`);     // gender
console.log(`paymentMethod : ${student1_2.paymentMethod}`);     // paymentMethod
console.log(`anyExperience : ${student1_2.anyExperience}`);     // anyExperience

if (student1_2.pastJobs.length === 0 ) {        // pastJobs is 0
    console.log(`pastJobs : No`);               // pastJobs : No
}else{                                          // pastJobs is not 0
    console.log(`pastJobs : Yes (${student1_2.pastJobs.length})`);               // pastJobs : Yes
    for (let jobIndex = 0 ; jobIndex < student1_2.pastJobs.length ; jobIndex++) {
        console.log(`     companyName : ${student1_2.pastJobs[jobIndex].companyName}`);     // companyName
        console.log(`     numOfYears : ${student1_2.pastJobs[jobIndex].numOfYears}`);     // numOfYears
        console.log(`     title : ${student1_2.pastJobs[jobIndex].title}`);     // title
        if (jobIndex === student1_2.pastJobs.length-1) {
            break;          //   to stop/break loop
        }
        console.log(`\n`);     // new line
    }
}

let skillString2 = 'knownSkills : ' + student1_2.knownSkills.length + ' (';      // start skillString
for (let skillIndex = 0 ; skillIndex < student1_2.knownSkills.length ; skillIndex++) {
    skillString2 = skillString2 + student1_2.knownSkills[skillIndex];     // add skills to skillString
    if (skillIndex === student1_2.knownSkills.length-1) {
        break;          //   exit at last skill
    }
    skillString2 = skillString2 + ', ';     // add ', ' after each skill
}
skillString2 = skillString2 +  ')';    // close skillString
console.log(skillString2);    // print skillString
console.log(`\n`);     // new line







/**
 * Q2: Print the index for SECOND occurrence of 'baseBalL' (Ignoring cases)
 * 
 * if BaseBall is NOT present in Array: print, Baseball is not present in the given array
 * if BaseBall is present Only once in Array: print, Baseball is present only once in the given array
 * if BaseBall is present two or more times in Array: print, Baseball has second occurrence at index-X
 
let favSports_1 = ['Football', 'Soccer', 'Fishing', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
*/
let favSports_1 = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
let favSports_2 = ['Football', 'Soccer', 'BaseBall', 'Ping pong', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
let favSports_3 = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];


//  PSEUDO CODE //
//  create variable occurrenceCount
//  create variable occurrence2Index
//  use for loop to find 'baseBall' in array
//  use variable occurrenceCount to count occurrences
//  when occurrenceCount is 2 record index into occurrence2Index
//  use if else to print appropriate condition statement


//  JS CODE //
let occurrenceCount = 0          //  create variable occurrenceCount
let occurrence2Index = -1          //  create variable occurrenceCount
for (let iSport = 0 ; iSport < favSports_1.length ; iSport++) {
    let sportCheck = favSports_1[iSport].toLowerCase();     //  put each sport value into sportCheck
    if (sportCheck.localeCompare('baseball') === 0) {      //  compare sportCheck with 'baseball'
        occurrenceCount++;                               //  Count occurrences of baseBall in array

        if (occurrenceCount === 2) {
            occurrence2Index = iSport ;     // record index of 2nd occurrence
        }
    } 
//    console.log(`\n${iSport} / ${sportCheck} / ${occurrenceCount} / ${occurrence2Index}`);    // data check
}
if (occurrenceCount >= 2) {     // do if it occurs 2+ times
    console.log(`\nBaseball has second occurrence at index-${occurrence2Index}`);
} else if (occurrenceCount === 1) {    // do if it occurs 1 times
    console.log(`\nBaseball is present only once in the given array`);
} else if (occurrenceCount === 0) {    // do if it does not occur
    console.log(`\nBaseball is not present in the given array`);
}







/**
 * Q3. Print the total number of past experience for a student
 * 
 * Assumption:
 * In studentObject, anyExperience-attribute will be true, if has any past-experience, 
 * otherwise anyExperience-attribute will be false
 * 
 * If student has any past experience, print :
 *      studentName has total X-years of experience
 * 
  * If student has NO past experience, print :
 *      studentName has no past experience
 */

// STUDENT DATA
let student3_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

let student3_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}


//  PSEUDO CODE //
//  print value of anyExperience
//
//  check if anyExperience 
//      if anyExperience is empty
//            print studentName has no past experience
//      if anyExperience has data
//          create variable for sum yearsExp
//          use for loop to get years experience from each job
//              add  new experience to yearsExp
//          print the string with total yearsExp

//  STUDENT 3-1 CODE  //
console.log(`\n\nanyExperience : ${student3_1.anyExperience}`);     // anyExperience : true

if (student3_1.anyExperience === false ) {        // no experience condition
    console.log(`${student3_1.name} has no past experience`);               // studentName has no past experience
} else {                                          // pastJobs is not 0 
    let yearsExp = 0    // use to track total years of experience 
    let newExp = 0    // individual job experience
    for (let jobIndex = 0 ; jobIndex < student3_1.pastJobs.length ; jobIndex++) {
        newExp = student3_1.pastJobs[jobIndex].numOfYears;    // put each job experience into newExp
        yearsExp = yearsExp + newExp;    // add newExp to yearsExp
    }
    console.log(`${student3_1.name} has total ${yearsExp}-years of experience`);   // studentName has total X-years of experience
}

//  STUDENT 3-2 CODE  //
console.log(`\n\nanyExperience : ${student3_2.anyExperience}`);     // anyExperience : true

if (student3_2.anyExperience === false ) {        // no experience condition
    console.log(`${student3_2.name} has no past experience`);               // studentName has no past experience
} else {                                          // pastJobs is not 0 
    let yearsExp = 0    // use to track total years of experience 
    let newExp = 0    // individual job experience
    for (let jobIndex = 0 ; jobIndex < student3_2.pastJobs.length ; jobIndex++) {
        newExp = student3_2.pastJobs[jobIndex].numOfYears;    // put each job experience into newExp
        yearsExp = yearsExp + newExp;    // add newExp to yearsExp
    }
    console.log(`${student3_2.name} has total ${yearsExp}-years of experience`);   // studentName has total X-years of experience
}
