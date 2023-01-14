import { question } from "readline-sync";
import Student, { Person } from './Student.js';
function Main() {
    try {
        let input;
        console.log("Type:  \n1. If you like to talk to others. \n2. If you would rather keep to yourself. ");
        input = question();
        const MyPerson = new Person();
        MyPerson.AskQuestion(Number(input));
        console.log(`You are: ${MyPerson.GetPersonality()}`);
        let name = question('What is you Name: ');
        const MyStudent = new Student();
        MyStudent.Name = name;
        console.log(`Your Name is ${MyStudent.Name} and Your Personality is ${MyStudent.GetPersonality()}`);
    }
    catch (error) {
        console.log('Please Enter an Integer ');
    }
}
Main();
