// Question - 2 - 30
/**
 * Create a function to convert all student-names into Titlecase.
 * Return the updated allStudentsData
 * 
 * const updateStudentRecord = titleCaseAllStudentNames(allStudentData_3)
 * console.log(updateStudentRecord)
 * 
 */
/**
 * Example:
 * 
 

//////////////////////   PSEUDO CODE  ////////
/**
 create function
    create return array
    use for loop to process the array
        split each student name into temporary array
            titlecase names
            put back together in array
    return updated array
 */



function titleCaseAllStudentNames(allStudentData) {
    let allStudentDataTC = [];

    for (let index = 0 ; index <= allStudentData.length-1 ; index++) {   // itterate through the StudentData 
        // console.log(`${index} | ${allStudentData[index].id} | ${allStudentData[index].name}`); // dataCheck
        let tempArr = allStudentData[index].name.toLowerCase().split(' ');   // split names into tempArray 
        let nameTC = '';                                                    // create empty TitleCase string
        for (let i=0 ; i < tempArr.length ; i++) {  // itterate through the tempArray 
            nameTC = nameTC + tempArr[i].charAt(0).toUpperCase() + tempArr[i].substring(1) + ' ';   // TitleCase each name and add it to TitleCase string 
        }
        // console.log(`-${tempArr} -> ${nameTC}`); // dataCheck

        allStudentDataTC.push({'id':allStudentData[index].id,'name':`${nameTC.trim()}`}); // put updated key value pair in new array
    }


    return allStudentDataTC
}

let allStudentData2_1 = [
   {
       id: 1,
       name: 'haRrY',
   },
   {
       id: 2,
       name: 'KiNG',
   },
   {
       id: 3,
       name: 'laNa',
   },
   {
       id: 4,
       name: 'cHaSe',
   },
   {
       id: 5,
       name: 'mAYa',
   }
];


const updateStudentRecord2_1 = titleCaseAllStudentNames(allStudentData2_1)
console.log(updateStudentRecord2_1);



let allStudentData2_2 = [
     {
         id: 1,
         name: 'haRrY poTteR',
     },
     {
         id: 2,
         name: 'KiNG koNG',
     },
     {
         id: 3,
         name: 'laNa geRe',
     },
     {
         id: 4,
         name: 'cHaSe LAN',
     },
     {
         id: 5,
         name: 'mAYa paSha',
     }
]

 const updateStudentRecord2_2 = titleCaseAllStudentNames(allStudentData2_2)
 console.log(updateStudentRecord2_2);
 

 let allStudentData2_3 = [
      {
          id: 1,
          name: 'leo',
      },
      {
          id: 2,
          name: 'greg COlL',
      },
      {
          id: 3,
          name: 'Adien Row',
      },
      {
          id: 4,
          name: 'cheville jUSa',
      }
 ]

 const updateStudentRecord2_3 = titleCaseAllStudentNames(allStudentData2_3)
 console.log(updateStudentRecord2_3);