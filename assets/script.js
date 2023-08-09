var startButton = document.getElementById('btn');
var timer = document.getElementById('timer');
var questEl = document.getElementById('quest-section');
var results = document.querySelector('.Final-Display');
var highScore = document.getElementById('Highscores');
var firstScreen = document.getElementById('first');
var submitBtn =  document.getElementById('submit');
var userInitials = document.getElementById('initials');
var finalScore = document.getElementById('finalScore');




var secondsLeft = 60;
var currentQuestIndex = 0;
var blankButton = document.createElement("button");
var timerInterval;

//Questions and answers for quiz
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: 'strings', correct: false },
            { text: 'booleans', correct: false },
            { text: 'alerts', correct: true },
            { text: 'numbers', correct: false }
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed with __________.",
        answers: [
            { text: 'quotes', correct: false },
            { text: 'curly brackets', correct: true },
            { text: 'parenthesis', correct: false },
            { text: 'square brackets', correct: false }
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        answers: [
            { text: 'numbers and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: true },
        ],
    },
    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        answers: [
            { text: 'commas', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'quotes', correct: true },
            { text: 'parenthesis', correct: false },
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: 'JavaScript', correct: false },
            { text: 'terminal/bash', correct: false },
            { text: 'for loops', correct: false },
            { text: 'console.log', correct: true },
        ]
    }
]

//Start button click
function startQuiz() {
    console.log("Start Quiz");
    // beginQuiz('inner-div', 'question-div');
    // firstQuestion();
    firstScreen.classList.add('hide')
    startTimer();
    //console.log(questions[currentQuest].question);
    displayQuestion();
};

function displayQuestion() {
    questEl.innerHTML = ''
    var quest = questions[currentQuestIndex]
    var currentP = document.createElement("p");
    currentP.textContent = quest.question;
    
    var choicesDiv = document.createElement('div')
    var choices = quest.answers;
    for (var i = 0; i < choices.length; i++) {
        var button = document.createElement("button");

        button.setAttribute("value", choices[i].text);
        button.setAttribute("correct", choices[i].correct);
        button.textContent = choices[i].text;
        button.addEventListener("click", verifySelection);
        choicesDiv.append(button);
    }

    questEl.append(currentP, choicesDiv);
}

function verifySelection() {
    // // button.onclick = verifySelection;
    var userAnswer = this.getAttribute("correct");
    if (userAnswer === 'false') {
        secondsLeft -= 5;
    };
    
    timer.textContent = secondsLeft;

    currentQuestIndex++

    if (questions.length === currentQuestIndex) {
        endQuiz()
    } else {
        displayQuestion()
    }

    

}

function endQuiz() {
    clearInterval(timerInterval);
    questEl.classList.add('hide')
    results.classList.remove('hide')
}

function submitScore(){
    var initials = userInitials.value.trim();
    var score = secondsLeft;
    var scoreObj = {
        userInitial: initials,
        userScore: score
    };
    console.log(scoreObj);

    saveScore(scoreObj);
//    console.log(recordInitials);
}

function saveScore(obj) {
    console.log(obj);
    var highScoreList = JSON.parse(localStorage.getItem("score")) || [];
    highScoreList.push(obj);
    localStorage.setItem("score", JSON.stringify(highScoreList));
    finalScore.innerHTML = obj.userScore;
}

//Timer function
function startTimer() {
    timer.textContent = secondsLeft;
    timerInterval = setInterval(
        () => {
            secondsLeft--;
            timer.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                
                endQuiz();
            }
        }, 1000);
};




startButton.addEventListener("click", startQuiz);
submitBtn.addEventListener('click', submitScore)

