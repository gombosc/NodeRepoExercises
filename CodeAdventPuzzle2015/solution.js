const fs = require('fs');
// Base Floor = 0
// Open Paranthesis '(' = + 1 floor
// Closed Paranthesis: ) = -1 floor
let baseFloor = 0;
console.time('Challenge')

const fileData = fs.readFileSync("input.txt").toString().split('')
// Transform string to array
// #1 Array.from(string)
// #2 string.split('')
// #3 [...string]
// Object.assign([], string)


// -----------------------------------------
// Second Version

fileData.forEach(element => {
    
     // Third V. with Conditional Ternary Operator
     element === "(" ? baseFloor++ : element === ')' ? baseFloor-- : baseFloor;
     console.log("Floor Santa is: ", baseFloor)

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
