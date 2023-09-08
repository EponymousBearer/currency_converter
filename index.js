#!/usr/bin/env node
import inquirer from "inquirer";
const Conversion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "GBP": 1,
        "PKR": 271.79
    },
    "USD": {
        "USD": 1,
        "GBP": 0.83,
        "PKR": 225.50
    }
};
async function main() {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "From",
            choices: ["PKR", "USD", "GBP"],
            message: "Select Your Currency"
        },
        {
            type: "list",
            name: "To",
            choices: ["PKR", "USD", "GBP"],
            message: "Select Your Conversion Currency"
        },
        {
            type: "number",
            name: "Amount",
            message: "Enter Your Conversion Amount"
        }
    ]);
    const { From, To, Amount } = answer;
    if (From && To && Amount) {
        const result = Conversion[From][To] * Amount;
        console.log(`Your conversion from ${From} to ${To} is ${result}`);
    }
    else {
        console.log("Invalid Inputs");
    }
}
main();
