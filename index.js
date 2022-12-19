"use strict";
exports.__esModule = true;
exports.main = exports.endLines = exports.printAuthorName = exports.printRed = exports.printGreen = exports.printYellow = exports.RandomNumberGenerator = void 0;
var readline_sync_1 = require("readline-sync");
function RandomNumberGenerator(limit) {
    var randomNumber = Math.random() * limit;
    var randomNumberNew = Math.floor(randomNumber);
    return randomNumberNew;
}
exports.RandomNumberGenerator = RandomNumberGenerator;
function printYellow(msg) {
    var frmtmsg = '\u001b[' + 33 + 'm' + msg + '\u001b[0m';
    return frmtmsg;
}
exports.printYellow = printYellow;
function printGreen(msg) {
    var frmtmsg = '\u001b[' + 32 + 'm' + msg + '\u001b[0m';
    return frmtmsg;
}
exports.printGreen = printGreen;
function printRed(msg) {
    var frmtmsg = '\u001b[' + 31 + 'm' + msg + '\u001b[0m';
    return frmtmsg;
}
exports.printRed = printRed;
function printAuthorName(msg) {
    var frmtmsg = '\u001b[' + 36 + 'm' + msg + '\u001b[0m';
    return frmtmsg;
}
exports.printAuthorName = printAuthorName;
function endLines() {
    console.log("".concat(printYellow("|\t\t\t\t\t |")));
    console.log("".concat(printYellow("|========= *********END******** =========|"), "\n\n"));
}
exports.endLines = endLines;
function main() {
    var score = 0;
    while (true) {
        var range = 10;
        console.log("\n\n".concat(printYellow('|========================================|')));
        console.log("|\t\t\t\t\t |\n".concat(printAuthorName('|========= Game By Haris Rehman =========|'), " \n|\t\t\t\t\t |"));
        console.log("".concat(printYellow('|========= Number Guessing Game =========|'), " \n|\t\t\t\t\t |"));
        console.log("".concat(printYellow('|\t   Press "S" to STOP \t\t |'), " \n|\t\t\t\t\t |"));
        console.log("".concat(printYellow('|========= ******************** =========|'), " \n|\t\t\t\t\t |"));
        var input = (0, readline_sync_1.question)("".concat(printYellow("|Enter Number between 1-".concat(range, " : "))));
        var RandNumber = RandomNumberGenerator(range);
        //Stop Code
        if (input === 'S' || input === 's') {
            console.log("".concat(printYellow('|Thanks for Playing \t\t\t |')));
            console.log("".concat(printYellow("|your Final Score is ".concat(score, ". \t\t |"))));
            endLines();
            break;
        }
        //When Guessed Number is Correct!!!
        else if (RandNumber === Number(input)) {
            score += 1;
            console.log(printGreen('|You Guessed it Right, \t\t\t |'));
            console.log(printGreen("|Generated Number: ".concat(RandNumber, ", your Score: ").concat(score, " \t |")));
            endLines();
        }
        //When Guessed Number is Wrong!!!
        else {
            console.log(printRed("|Guessed Number was wrong ".concat(input, ".\t\t |")));
            console.log(printRed("|Generated Number was ".concat(RandNumber, ".\t\t |")));
            endLines();
        }
    }
}
exports.main = main;
//Function Call
main();
