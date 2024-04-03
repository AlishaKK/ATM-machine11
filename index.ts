#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance: number = 10000;
let myPin = 12345;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct Pin Code!");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);
  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount <= myBalance) {
      myBalance -= amountAns.amount;
      console.log(`Your remaining balance is ${myBalance}`);
    } else {
      console.log("You have insufficient balance");
    }
  } else if (operationAns.operation === "check balance") {
    console.log(`Your balance is: ${myBalance}`);
  }
 
} else {
  console.log("Wrong Pin Code!");
}
