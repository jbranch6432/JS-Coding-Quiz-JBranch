var highScoresPage = document.getElementById('scoreResults');
var clearBtn = document.getElementById('clear');

function retrieveScores() {
    var endScoresList = JSON.parse(localStorage.getItem("score"));
    displayScores(endScoresList);
}

function displayScores(scoreData) {
    for(var i=0; i < scoreData.length; i++){
        var listItem = document.createElement("li");
        console.log(scoreData[i]);
        listItem.innerHTML = (scoreData[i].userInitial + "-" + scoreData[i].userScore);
        highScoresPage.appendChild(listItem);
    }
}

function clearScores() {
    localStorage.clear();
    console.log(clearScores);
}

retrieveScores();





clearBtn.addEventListener("click", clearScores);

