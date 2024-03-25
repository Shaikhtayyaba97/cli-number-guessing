#! /usr/bin/env node


import inquirer from "inquirer"

const randomnumer=Math.floor(Math.random() *6 + 1);
console.log("welcome to number guessing game");



const answer = await inquirer.prompt ([
    {
        name:"userguessednumber",
        type:"number",
        message:"please guess a number between 1-10:",
    },
]);
if(answer.userguessednumber=== randomnumer)
{console.log("congtratulation you guessed right number");
}else{console.log("you gussed wrong number");}
