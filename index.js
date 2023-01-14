import inquirer from 'inquirer';

const questions = [
        {
            type: 'input',
            name: "First_Number",
            message: "Enter First Number",
            validate:(value)=>{
                if (isNaN(value)) {
                    return "Enter a valid Number.";
                }
                return true;
            },
            default: 1
        },
        {
            type: "list",
            name: "Operator",
            message: "Select an Operator.",
            choices: ["+", "-", "*", "/"],
            default: "+"
        },
        {
            type: 'input',
            name: "Second_Number",
            message: "Enter Second Number",
            validate: (value) => {
                if (isNaN(value)) {
                    return ("Enter a valid Number.")
                }
                return true;
            },
            default: 1
        },
    ]
    
console.log("--------Simple Calculator--------\n-----Created By: Haris Rehman-----\n");
inquirer
    .prompt(questions)
    .then((answers) => {
        const op = answers["Operator"];
        const num1 = parseInt(answers["First_Number"]);
        const num2 = parseInt(answers["Second_Number"]);

        if (op === "+") {
            console.log(`${num1} ${op} ${num2} = `, (num1 + num2));
        }
        else if (op === "-") {
            console.log(`${num1} ${op} ${num2} = `, (num1 - num2));
        }
        else if (op === "*") {
            console.log(`${num1} ${op} ${num2} = `, (num1 * num2));
        }
        else if (op === "/") {
            console.log(`${num1} ${op} ${num2} = `, (num1 / num2));
        }
        console.log("\n");

    });
// .catch((error) => {
//     if (error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//     } else {
//         // Something else went wrong
//     }
// });