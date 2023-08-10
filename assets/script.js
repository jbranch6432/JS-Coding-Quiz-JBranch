var startButton = document.getElementById('btn');
var timer = document.getElementById('timer');
var questEl = document.getElementById('quest-section');
var results = document.querySelector('.Final-Display');
var highScore = document.getElementById('Highscores');
var firstScreen = document.getElementById('first');
var submitBtn = document.getElementById('submit');
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

//Start button click and begin Timer
function startQuiz() {
    console.log("Start Quiz");
    firstScreen.classList.add('hide')
    startTimer();
    displayQuestion();
};

//Display quetsions to the page once quiz begins
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

//Subtract time from Timer if incorrect answer is selected
function verifySelection() {
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
    // display the final score
    finalScore.textContent = secondsLeft;
}

//Allow users to save score with their initials.... 
function submitScore() {
    var initials = userInitials.value.trim();

    var scoreObj = {
        userInitial: initials,
        userScore: secondsLeft
    };
    // parses the data from localStorage. if it does not exists it will return an empty array
    var highScoreList = JSON.parse(localStorage.getItem("score")) || [];
    
    // add the new score object to the highscores array
    highScoreList.push(scoreObj);
    
    // save the score array into local storage as a string
    localStorage.setItem("score", JSON.stringify(highScoreList));

    // we redirect the player to the highscore html
    window.location.href = 'highscore.html'
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
submitBtn.addEventListener("click", submitScore);

