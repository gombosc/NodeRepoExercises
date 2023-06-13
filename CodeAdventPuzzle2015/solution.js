const fs = require('fs');
// Base Floor = 0
// Open Paranthesis '(' = + 1 floor
// Closed Paranthesis: ) = -1 floor



const fileData = fs.readFileSync("input.txt").toString().split('')
// Transform string to array
// #1 Array.from(string)
// #2 string.split('')
// #3 [...string]
// Object.assign([], string)


// -----------------------------------------
// Second Version
let Floor= 0 ;
console.time('Challenge')
fileData.forEach(element => {

     // Third V. with Conditional Ternary Operator
     element === "(" ? Floor++ : element === ')' ? Floor-- : Floor;

    // If version
    // if(element === "(")
    //     {
    //         baseFloor++;
    //     } 
    //     else if(element === ')') 
    //     {
    //         baseFloor--;
    //     }
});
console.timeEnd("Challenge");
console.log("Floor is: ", Floor)

// First Version
// for(i=0; i<fileData.length; i++){
    
//     if(fileData[i] === "(")
//     {
//         baseFloor++;
//     } 
//     else if(fileData[i] === ')') 
//     {
//         baseFloor--;
//     }
//         console.log("Floor Santa is: ", baseFloor)
// }
// console.timeEnd("Challenge");

// ------------------------------------------------------
// Time to run: 0.8s , time for Andrei's code : 0.5s, took a bit first because I was logging the results in the loop

