const HIGHSCORES = "highScoreList";
const HIGHSCORESARRAY = [];

var listOfHighscores = document.getElementById("HighscoreListDiv");
var stringArray;

function addNewHighScore (player, points, turns) {
    // push new highscore elements to array
    HIGHSCORESARRAY.push(player, points, turns)

    // sort highscore array


    // converts highscore array to string
    stringArray = JSON.stringify(HIGHSCORESARRAY);
    // saves highscore in localstorage
    localStorage.setItem(HIGHSCORES, stringArray);
    //update displayHighScores
    displayHighScores(HIGHSCORES)

} 

function sortHighScores (array) {

}

// to use: displayHighScores(HIGHSCORES);
function displayHighScores (key) {
    stringArray = localStorage.getItem(key);
    let arrayOfStrings = JSON.parse(stringArray);

    //clear div elements
    listOfHighscores.innerHTML = "";
    // return null if the key dont exists
    if (stringArray === null) {
        listOfHighscores.innerHTML = "";
    } else {
        for (let i = 0; i < arrayOfStrings.length; i += 3) {
            const group = document.createElement("div");

            for (let j = i; j < i + 3 && arrayOfStrings.length; j++) {
                const HSStats = arrayOfStrings[j];
                const HSStatsDiv = document.createElement("div");
                HSStatsDiv.textContent = HSStats;
                group.appendChild(HSStatsDiv);                
            }
            listOfHighscores.appendChild(group)
        }
    }
}

addNewHighScore("philip", 1, 5);
