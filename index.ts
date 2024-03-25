#!/usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the opretarsto perfom opration",
    type: "list",
    name: "oprater",
    choices: ["Addition","Subtraction","Multiplication","Divition"],
  },
]);

// conditonal statment
if(answer.oprater === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.oprater === "Subtraction"){
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.oprater === "Multiplication"){ 
console.log(answer.firstNumber * answer.secondNumber);

} else if (answer.oprater === "Divition"){
  console.log(answer.firstNumber / answer.secondNumber);
}else{
  console.log("plase select vild oprator")
}