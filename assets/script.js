
var timer = document.getElementById('Timer');
var question = document.getElementById('Questions');
var results = document.getElementById('Final-Display');
var highScore = document.getElementById('Highscores');

var secondsLeft = 60;
var score = 0;
var currentQuest = -1;
var finalScore;

//Move from 'Welcome' to next div to begin the quiz
function beginQuiz(begin, next) {
    document.getElementById(begin).classList.add('hide');
    document.getElementById(next).removeAttribute('class');
};

//Start button click
function startQuiz() {
    beginQuiz('inner-div', 'question-div');
    firstQuestion();
    startTimer();
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
                endQuiz();
            }
        }, 1000);
};

function nextQuestion() {
    currentQ++;

    if (var i=0; i<Questions.length; i++) {
       secondsLeft = 0;
       endQuiz();
    }else {
        question.textContent = 
    } 
    }

}
//Questions and answers for quiz
var Questions = [{
    question: "Commonly used data types DO Not include:",
    answers: {
        1.: 'strings',
        2.: 'booleans',
        3.: 'alerts',
        4.: 'numbers'
    },
    correctAnswer: '3.',

    question: "The condition in an if/else statement is enclosed with __________.",
    answers: {
        1.: 'quotes',
        2.: 'curly brackets',
        3.: 'parenthesis',
        4.: 'square brackets',
    },
    correctAnswer: '2.',

    question: "Arrays in JavaScript can be used to store __________.",
    answers: {
        1.: 'numbers and strings',
        2.: 'other arrays',
        3.: 'booleans',
        4.: 'all of the above',
    },
    correctAnswer: '4.',

    question: "String values must be enclosed within __________ when being assigned to variables.",
    answers: {
        1.: 'commas',
        2.: 'curly brackets',
        3.: 'quotes',
        4.: 'parenthesis',
    },
    correctAnswer: '3.',

    question: "A very useful tool used during development and debugginf for printing content to the debugger is:",
    answers: {
        1.: 'JavaScript',
        2.: 'terminal/bash',
        3.: 'for loops',
        4.: 'console.log',
    },
    correctAnswer: '4.'
}]

