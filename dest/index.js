"use strict";
const data = [
    {
        question: `1. Javascript is an _______ language?`,
        a: "Object-Oriented",
        b: "Object-Based",
        c: 'Procedural',
        d: 'None of the above',
        answer: 'a'
    },
    {
        question: "2. Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b: "let",
        c: 'Both a and b',
        d: 'None of the above',
        answer: 'c'
    },
    {
        question: "3. Which of the following methods is used to access HTML elements using Javascript?",
        a: "getElementbyId()",
        b: "getElementsByClassName()",
        c: 'Both a and b',
        d: 'None of the above',
        answer: 'c'
    },
    {
        question: "4. Upon encountering empty statements, what does the Javascript Interpreter do?",
        a: "Throws an error",
        b: "Ignores the statements",
        c: 'Gives a warning',
        d: 'None of the above',
        answer: 'b'
    },
    {
        question: "5. Which of the following methods can be used to display data in some form using Javascript?",
        a: "document.write()",
        b: "console.log()",
        c: 'window.alert()',
        d: 'All of the above',
        answer: 'd'
    },
];
const startContainer = document.getElementById('startPortion');
const quizContainer = document.getElementById('questionPortion');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const submitBtn = document.getElementById('showScore');
const mainDiv = document.getElementById('main');
let countAnswers = 0;
let qno = 0;
function ShowResult() {
    mainDiv.style.marginTop = '6%';
    toggleVisibility();
}
function toggleVisibility() {
    var div = document.getElementById("showResult");
    if (div.style.display === "none") {
        div.style.display = "block";
    }
    else {
        submitBtn.classList.remove('disabled');
        div.style.display = "none";
        mainDiv.style.marginTop = '10%';
        countAnswers = 0;
        qno = 0;
        DisplayQuestion(qno);
    }
}
function DisplayQuestion(n) {
    let question = document.getElementById('question');
    let ans1 = document.getElementById('lbl_ans1');
    let ans2 = document.getElementById('lbl_ans2');
    let ans3 = document.getElementById('lbl_ans3');
    let ans4 = document.getElementById('lbl_ans4');
    if (n < data.length) {
        let QuestionNo = data[n];
        question.innerHTML = QuestionNo.question;
        ans1.innerHTML = QuestionNo.a;
        ans2.innerHTML = QuestionNo.b;
        ans3.innerHTML = QuestionNo.c;
        ans4.innerHTML = QuestionNo.d;
    }
}
// function deSelectAll() {
//     radioButtons.forEach((e) => {
//         for (let i = 0; i < radioButtons.length; i++) {
//             const radioButton = radioButtons[i] as HTMLInputElement;
//             radioButton.checked = false;
//         }
//     })
// }
const getAnswer = () => {
    let answer = '';
    radioButtons.forEach((e) => {
        for (let i = 0; i < radioButtons.length; i++) {
            const radioButton = radioButtons[i];
            if (radioButton.checked) {
                answer = radioButton.id;
            }
        }
    });
    return answer;
};
submitBtn.addEventListener('click', () => {
    if (qno < data.length) {
        let checkedAnswer = getAnswer();
        console.log(checkedAnswer, data[qno].answer, qno, countAnswers);
        if (checkedAnswer === data[qno].answer) {
            countAnswers = countAnswers + 1;
        }
        qno++;
        DisplayQuestion(qno);
    }
    else {
        const score = document.getElementById('score');
        score.innerHTML = String(`${countAnswers}/5`);
        ShowResult();
        submitBtn.classList.add('disabled');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    DisplayQuestion(0);
});
