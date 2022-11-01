// Question - 3 - 50
let allStudentRecords_3 = [
    {
        id: 1,
        name: 'Adien owjh',
    },
    {
        id: 2,
        name: 'kristEn sole',
    },
    {
        id: 3,
        name: 'ReMA',
    },
    {
        id: 4,
        name: 'chess GamE',
    },
    {
        id: 5,
        name: 'mAYa',
    }
];
/**
 * Create a function to update first name for the student.
 * Student will provide the student-id and NEW FIRST NAME
 * 
 * if student is present in the records AND new FIRST name is different (or NOT EXACTLY present) than already present first name
 *      update the record with student's first name.
 *      print message -> Your name is updated successfully, new full name in the records: "firstName lastName"
 *      (show lastName if that was present already)
 * 
 * if student is present in the records AND new FIRST name is EXACTLY SAME as already present in the records
 *      Do not update the student name
 *      print message -> Provided New firstName is same as of in the records, full name in the records: "firstName lastName"
 *      (show lastName if that was present already)
 * 
 * if student-id is NOT present in the records
 *      Do not update the student name
 *      print message -> Invalid student id provided.
 */

//////////////////////   PSEUDO CODE  ////////
/**
 create function
    check if student id is valid
        get the first name
        check if new name is different
            change the first name
 */




function updateFirstName(sId, newFirstName, studentRecords) {
    // console.log(`${sId} | ${newFirstName}`); // dataCheck
    let isValidID = false; // isValidID starts false
    for (let index = 0 ; index <= studentRecords.length-1 ; index++) {
        // console.log(studentRecords[index].id); // dataCheck
        if (studentRecords[index].id === sId) {  // look for sID
            isValidID = true; // sID is valid
            
            let nameArr = studentRecords[index].name.split(' ');   // split names into name Array 
            // console.log(nameArr); // dataCheck

            if (nameArr[0] === newFirstName) {  // compare old and newfirstName
                console.log(`\nProvided New firstName is same as of in the records, full name in the records: "` + nameArr.join(' ') +`"`)
            } else {
                nameArr[0] = newFirstName;  // change first name in nameArr
                studentRecords[index].name = nameArr.join(' ');  // put change name back into studentRecords array
                console.log(`\nYour name is updated successfully, new full name in the records: "` + nameArr.join(' ') +`"`)
            }
        }
    }
    if (isValidID === false){
    console.log(`\nInvalid student id provided.`)
}


}

updateFirstName(1, 'justin', allStudentRecords_3)
    // Your name is updated successfully, new full name in the records: "justin owjh"

 updateFirstName(5, 'simmy', allStudentRecords_3);
    // Your name is updated successfully, new full name in the records: "simmy"

 updateFirstName(6, 'sole', allStudentRecords_3);
    // Invalid student id provided.

 updateFirstName(4, 'chess', allStudentRecords_3);
    // Provided New firstName is same as of in the records, full name in the records: "chess GamE"
