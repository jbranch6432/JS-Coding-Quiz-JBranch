var highScoresPage = document.getElementById('scoreResults');
var clearBtn = document.getElementById('clear');
var endScoresList = JSON.parse(localStorage.getItem("score")) || [];
var restartBtn = document.getElementById('restartQuiz');


function displayScores() {
    for (var i = 0; i < endScoresList.length; i++) {
        var listItem = document.createElement("li");
        console.log(endScoresList[i]);
        listItem.innerHTML = (endScoresList[i].userInitial + "-" + endScoresList[i].userScore);
        highScoresPage.appendChild(listItem);
    }
}

function clearScores() {
    localStorage.clear();
     window.location.reload()

}

 function restartOver() {
    window.location.href = 'index.html'
 }


 displayScores()





 clearBtn.addEventListener('click', clearScores);
 restartBtn.addEventListener("click", restartOver);
