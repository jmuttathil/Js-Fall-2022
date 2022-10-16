/**
 * Due date: Oct 16 eod
 */

/**
 * Q1:
 * const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced value. :-1
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2" :1
 * if BASKETBALL is present but not in index-2, print "BASKETBALL is mentioned in the sports array" : X
 */
 const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
 let indexOf_BASKETBALL = sports.indexOf('BASKETBALL');   // search for string in array
if (indexOf_BASKETBALL == -1) {       // Not Present
    let ValueOf_Index2 = sports[1];   // save old value of index-2
    sports.fill('BASKETBALL', 1, 2);   // replace value of index-2
    console.log(`\nReplaced ${ValueOf_Index2} with BASKETBALL`);
} else if (indexOf_BASKETBALL == 1) {       // Present @ index-2
    console.log(`\nBASKETBALL is present at index-2`);
} else {                                    // Present somewhere else
    console.log("BASKETBALL is mentioned in the sports array")
}

/**
 * Q2:
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 */

 let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];

 let indexOf_Earth = planets.indexOf('Earth');   // search for string in array
 if (indexOf_Earth == 0) {       // Earth is first
    console.log(`\nEarth is mentioned in expected index`);
 } else {                                    // Earth isn't first
    planets.unshift('Earth');   // Make Earth first
    console.log(planets);       // print array
 }

/**
 * Q3:
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-C : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * if student score and maxScore are valid, then print "Your percentage is XX.yy and your Grade is Z"
 * 
 * studentScore = 100
 * maxScore = 150
 * (studentScore/maxStore)*100
 */

let studentScore = 121;
let maxScore = 150;
let studentPercentage = (studentScore/maxScore)*100;    // calculate percentage
studentPercentage = studentPercentage.toString();       // convert number to string

// FORMAT THE PERCENTAGE TO TWO DECIMAL PLACES
let studentPercentFormated = ''                         // declare variable
switch (true) {                                         // check if studentPercentage has decimal
    case studentPercentage.includes('.'):               // do this if it has decimal
        studentPercentFormated = studentPercentage.slice(0,studentPercentage.indexOf('.')+3);
        break;
    default:                                            // do this if it doesn't have a decimal
        studentPercentFormated = studentPercentage;
}

// CHECK THE % AND ASSIGN THE CORESPONDING GRADE
if (studentPercentage < 0 || studentPercentage > 100) { // first check for an invalid percentage
    console.log(`\nInvalid student score`);
 } else {                                               // do this for valid percentages
     switch (true) {
        case studentPercentage >= 91:
            console.log(`\nYour percentage is ${studentPercentFormated} and your Grade is A`);       // A GRADE
            break;   
        case studentPercentage >= 81:
            console.log(`\nYour percentage is ${studentPercentFormated} and your Grade is B`);       // B GRADE
            break;     
        case studentPercentage >= 71:
            console.log(`\nYour percentage is ${studentPercentFormated} and your Grade is C`);       // C GRADE
            break;     
        case studentPercentage >= 61:
            console.log(`\nYour percentage is ${studentPercentFormated} and your Grade is D`);       // D GRADE
            break;           
        case studentPercentage >= 51:
            console.log(`\nYour percentage is ${studentPercentFormated} and your Grade is E`);       // E GRADE
             break;           
        default:
            console.log(`\nYour percentage is ${studentPercentFormated} and your Grade is F`);       // F GRADE
    }
 }
 

/**
 * Q4:
 * 
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 
 * 
 * 10, 12, 15, 19
 */

let myNumber = 10

// CHECK IF DIVISIBLE BY 5
let myNumberMod5 = myNumber % 5
let myNumberDivisible5 = ""
switch (myNumberMod5){
    case 0:
        myNumberDivisible5 = true
        break;
    default:
        myNumberDivisible5 = false
}

// CHECK IF DIVISIBLE BY 3
let myNumberMod3 = myNumber % 3
let myNumberDivisible3 = ""
switch (myNumberMod3){
    case 0:
        myNumberDivisible3 = true
        break;
    default:
        myNumberDivisible3 = false
}

// CHECK THE CONDITIONS AND PRINT APPROPRIATE RESPONSE
if (myNumberDivisible5 == true && myNumberDivisible3 == true) {   // BOTH TRUE
    console.log(`\ndivisible by 5 and 3`);
} else if (myNumberDivisible5 == true && myNumberDivisible3 == false) {  // ONLY 5 IS TRUE
    console.log(`\ndivisible by 5`);  
} else if (myNumberDivisible5 == false && myNumberDivisible3 == true) {  // ONLY 3 IS TRUE
    console.log(`\ndivisible by 3`);  
} else if (myNumberDivisible5 == false && myNumberDivisible3 == false) {  // BOTH FALSE
    console.log(`\n${myNumber}`); 
}