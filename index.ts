import { question } from 'readline-sync';

export function RandomNumberGenerator(limit): number {
    const randomNumber = Math.random() * limit;
    const randomNumberNew = Math.floor(randomNumber);
    return randomNumberNew;
}

export function printYellow(msg:string):string
{
    const frmtmsg :string = '\u001b[' + 33 + 'm' + msg + '\u001b[0m';
    return frmtmsg;
}

export function printGreen(msg: string): string {
    const frmtmsg: string = '\u001b[' + 32 + 'm' + msg + '\u001b[0m';
    return frmtmsg;
}

export function printRed(msg: string): string {
    const frmtmsg: string = '\u001b[' + 31 + 'm' + msg + '\u001b[0m';
    return frmtmsg;
}

export function printAuthorName(msg: string): string {
    const frmtmsg: string = '\u001b[' + 36 + 'm' + msg + '\u001b[0m';
    return frmtmsg;
}

export function endLines():void
{
    console.log(`${printYellow(`|\t\t\t\t\t |`)}`);
    console.log(`${printYellow(`|========= *********END******** =========|`)}\n\n`);
}

export function main() {
    let score: number = 0;

    while (true) {

        const range = 10;
        console.log(`\n\n${printYellow('|========================================|')}`)
        console.log(`|\t\t\t\t\t |\n${printAuthorName('|========= Game By Haris Rehman =========|')} \n|\t\t\t\t\t |`);
        console.log(`${printYellow('|========= Number Guessing Game =========|')} \n|\t\t\t\t\t |`);
        console.log(`${printYellow('|\t   Press "S" to STOP \t\t |')} \n|\t\t\t\t\t |`);
        console.log(`${printYellow('|========= ******************** =========|')} \n|\t\t\t\t\t |`);
        
        const input = question(`${printYellow(`|Enter Number between 1-${range} : `)}`);
        const RandNumber = RandomNumberGenerator(range);

        //Stop Code
        if (input === 'S' || input === 's') {
            console.log(`${printYellow('|Thanks for Playing \t\t\t |')}`);
            console.log(`${printYellow(`|your Final Score is ${score}. \t\t |`)}`);
            endLines();
            break;
        }
        //When Guessed Number is Correct!!!
        else if (RandNumber === Number(input)) {
            score += 1;
            console.log(printGreen('|You Guessed it Right, \t\t\t |'));
            console.log(printGreen(`|Generated Number: ${RandNumber}, your Score: ${score} \t |`));
            endLines();
        }
        //When Guessed Number is Wrong!!!
        else{
            console.log(printRed(`|Guessed Number was wrong ${input}.\t\t |`));
            console.log(printRed(`|Generated Number was ${RandNumber}.\t\t |`));
            endLines();
        }
    }

}
//Function Call
main();
