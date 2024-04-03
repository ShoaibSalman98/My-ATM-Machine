

import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";
console.log (chalk.bgBlueBright.bold("\t\n >>>>> Wellcome to the ATM MACHINE <<<<< \t\n") 
,chalk.bgGreenBright.bold("***** BANK OF SHOAIB SALMAN ******"));
let MyBalance =25000;
let MyPin = 123;

let UserPin = await inquirer.prompt(
  {
        name: "PIN",
        type: "number",
        message:(chalk.red.bold("Enter Your Pin")),
  }
);

     if (UserPin.PIN === MyPin) {
    
  
    let Options = await inquirer.prompt([{
        name: "select",
        message:(chalk.yellowBright.bold.underline.italic(" >>>>> Please chooose a desired operation <<<<<")),
        type:"list",
        choices:["Withdraw","Fund Transfer","check Balance","Fast Cash"],
    
    }]); 
        console.log(Options.select);

      if (Options.select === "Withdraw") {
      let Cash= await inquirer.prompt([{
          name:"cashamount",
          type: "number",
          message: (chalk.green.bold ("Enter Amount")),
      }]);
      if (Cash.cashamount > MyBalance) {
        console.log(chalk.red.bold(" <> <> <> Your Current Balance is Low to perform your Transection <> <> <> "));
      } else  {
        console.log(chalk.bgYellow.bold("\t ^^^^  Your Transication is succesfull ^^^^ \t"));
        MyBalance -= Cash.cashamount;
         console.log (chalk.blue.bold ("\t Your remaining balance is" +" "+ MyBalance));
           
      
        
  }
}
    if (Options.select === "Fund Transfer") {
      let fundTransfer = await inquirer.prompt([{
        name: "fund transferr",
        message: (chalk.blue.bold ("Select You Bank")),
        type: "list",
        choices: ["United Bank", "Habib Bank" , "National Bank"]  
        
      }]); 

   if (fundTransfer.fundtransferr === "United Bank","Habib Bank","National Bank") {
      let fundBank= await inquirer.prompt([{
        name: "fundbanks",
        message: (chalk.green.bold("Enter Account Number")),
        type: "number",
      }]);
    let fundbank1= await inquirer.prompt([{
      name: "fundbank",
      message: "Enter Amount",
      type: "number",
    }]);
  
      if (fundbank1.fundbank > MyBalance) {
        console.log (chalk.red.bold.underline(" <> <> <> Your Current Balance is Low to perform your Transection <> <> <> "));
      }
     else if (MyBalance -= fundbank1.fundbank) {
      console.log(chalk.green.bold.underline("\t **** Your remaining balance is **** " +" "+ MyBalance));
      console.log (chalk.bgBlueBright.bold("\t >>>>> Congratulations your funds has been Transferd <<<<<"));
    }
        
}  
   } 
if (Options.select === "Fast Cash") {
  let fcash = await inquirer.prompt([{
    name: "fastcash",
    message: (chalk.green.bold("Select Your Amount")),
    type: "list",
    choices: ["3000", "5000" , "10000","20000","25000"]  
    
  }]);

console.log(fcash.fastcash); 

if (fcash.fastcash === "3000", "5000" , "10000","20000","25000") {
  
  MyBalance -= fcash.fastcash;
  console.log(chalk.bgBlueBright.bold("\t <> <> <> Congratulations Your Transictaion is completed <> <> <> "));
  console.log(chalk.green.bold.underline("\t **** Your remaining balance is **** " +" "+ MyBalance));
  
}
}

if (Options.select === "check Balance") {
  console.log(chalk.bgGreenBright.bold("\t >>>> Your Current Balance is <<<<" , MyBalance));
} 
     } else {
      console.log(chalk.bgRedBright.bold("\t >>>>> Invalid PIN <<<<< \t"));
     };