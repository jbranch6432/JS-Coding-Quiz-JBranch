var startButton = document.getElementById('btn');
var timer = document.getElementById('timer');
var questEl = document.getElementById('quest-section');
var results = document.getElementById('Final-Display');
var highScore = document.getElementById('Highscores');

startButton.addEventListener("click", startQuiz);

var secondsLeft = 60;
var score = 0;
var currentQuestIndex = 0;
var finalScore;
var blankButton = document.createElement("button");
console.log(blankButton);

//Move from 'Welcome' to next div to begin the quiz
// function beginQuiz(begin, next) {
//     document.getElementById(begin).classList.add('hide');
//     document.getElementById(next).removeAttribute('class');
// };
function displayQuestion(quest) {
var currentP = document.createElement("p");
currentP.innerHTML = quest.question;
var choices = quest.answers;
for(var i=0; i< choices.length; i++){
   var button = document.createElement("button");

   button.setAttribute("value", choices[i].text);
   button.setAttribute("correct",choices[i].correct);
   button.textContent = choices[i].text;
   button.addEventListener("click", verifySelection);
   currentP.appendChild(button);
}

function verifySelection() {
    console.log(this);
}
questEl.appendChild(currentP);
}
//Start button click
function startQuiz() {
    console.log("Start Quiz");
    // beginQuiz('inner-div', 'question-div');
    // firstQuestion();
    startTimer();
    //console.log(questions[currentQuest].question);
    displayQuestion(questions[currentQuestIndex]);
    currentQuestIndex++
};

//Timer function
function startTimer() {
    timer.textContent = secondsLeft;
    const timerInterval = setInterval(
        ()=> {
            secondsLeft--;
            timer.textContent = secondsLeft;
            if (secondsLeft <=0) {
                clearInterval(timerInterval);
                // endQuiz();
            }
        }, 1000);
};

// function nextQuestion() {
//     currentQ++;

//     if (var i=0; i<Questions.length; i++) {
//        secondsLeft = 0;
//        endQuiz();
//     }else {
//         question.textContent = 
//     } 
//     }

// }

//Questions and answers for quiz
var questions = [
    {
    question: "Commonly used data types DO NOT include:",
    answers: [
     { text:'strings', correct: false},
     {text:'booleans', correct: false},
     {text:'alerts', correct: true},
     {text:'numbers', correct: false}
    ]
    },
    {
    question: "The condition in an if/else statement is enclosed with __________.",
    answers: [
        {text:'quotes', correct: false},
        {text:'curly brackets', correct: true},
        {text:'parenthesis', correct: false},
        {text:'square brackets', correct: false}
    ]
    },
    {
    question: "Arrays in JavaScript can be used to store __________.",
    answers: [
        {text:'numbers and strings', correct: false},
       {text:'other arrays', correct: false},
        {text:'booleans', correct: false},
        {text:'all of the above', correct: true},
    ],
    },
    {
    question: "String values must be enclosed within __________ when being assigned to variables.",
    answers: [
        {text:'commas', correct: false},
       {text:'curly brackets', correct: false},
        {text:'quotes', correct: true},
        {text:'parenthesis', correct: false},
    ]
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
        {text:'JavaScript', correct: false},
        {text:'terminal/bash', correct: false},
        {text:'for loops', correct: false},
        {text:'console.log', correct: true},
    ]
}
]

console.log(questions[1].question);
function nextQuestion (){

}