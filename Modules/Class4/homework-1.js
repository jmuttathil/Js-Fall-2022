/**
 * Homework - 1
 * 
 * Due date : Friday (Oct-7) eod
 * 
 * Convert temperature values into different units:
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Extra:
 *      Try to find how to get only 2-digits after the decimal point
 * 
 */

let fTemp1 = 60;

// F -> C
// T(°C) = (T(°F) - 32) / 1.8
let cTemp1 = (fTemp1 - 32) / 1.8
let cTemp1_2digits = cTemp1.toFixed(2)
console.log(`\n${fTemp1}°F is equal to ${cTemp1_2digits}°C`)

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9
let kTemp1 = (fTemp1 + 459.67) * (5/9)
let kTemp1_2digits = kTemp1.toFixed(2)
console.log(`${fTemp1}°F is equal to ${kTemp1_2digits}K`)


// Convert string to number
cTemp1 = Number(cTemp1_2digits) ;

// C -> F
// T(°F) = T(°C) × 9/5 + 32
let fTemp2 = cTemp1 * (9/5) +32
let fTemp2_2digits = fTemp2.toFixed(2)
console.log(`\n${cTemp1}°C is equal to ${fTemp2_2digits}°F`)

// C -> K
// T(K) = T(°C) + 273.15
let kTemp2 = (cTemp1 + 273.15)
let kTemp2_2digits = kTemp2.toFixed(2)
console.log(`${cTemp1}°C is equal to ${kTemp2_2digits}K`)


// Convert string to number
kTemp1 = Number(kTemp1_2digits) ;

// K -> F
// T(°F) = T(K) × 9/5 - 459.6
let fTemp3 = kTemp1 * (9/5) - 459.6
let fTemp3_2digits = fTemp3.toFixed(2)
console.log(`\n${kTemp1}K is equal to ${fTemp3_2digits}°F`)

// K -> C
// T(°C) = T(K) - 273.15
let cTemp3 = kTemp1 - 273.15
let cTemp3_2digits = cTemp3.toFixed(2)
console.log(`${kTemp1}K is equal to ${cTemp3_2digits}°C`)