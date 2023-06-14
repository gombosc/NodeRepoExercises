const fs = require ('fs');
const fileData = fs.readFileSync("input.txt").toString().split('');
let Floor= 0 ;

function question1(){
    console.time('Challenge')
    fileData.forEach(element => {
        element === "(" ? Floor++ : element === ')' ? Floor-- : Floor;
    });
    console.timeEnd("Challenge");
    return console.log("Floor is: ", Floor);
}

function question2(){
    console.time('Santa');
    answer = null;
    fileData.forEach( (element, index) => {
        if (element === '('){
            Floor++;
        }
             
        else if(element === ')'){
            Floor--;
        } 

        if(Floor === -1){
            answer = index + 1;
            console.log("Position Answer is: " + answer + ", Floor is: " + Floor);
            return;
        }

        });
    console.timeEnd('Santa');
}

question2();