const HIGHSCORES = "highScoreList";
const HIGHSCORESARRAY = [];
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



// not implemented yet
function sortHighScores (array) {

}




// to use: displayHighScores(HIGHSCORES);
function displayHighScores (key) {
    var listOfHighscores = document.getElementById("HighscoreListDiv");
    stringArray = localStorage.getItem(key);
    let arrayOfStrings = JSON.parse(stringArray);

    //clear div elements
    listOfHighscores.innerHTML = "";
    // return null if the key dont exists
    if (stringArray === null) {
        listOfHighscores.innerHTML = "";
    } else {
        //display highscore list
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

// clears local storage
function clearHighScores () {
    localStorage.clear();
    displayHighScores(HIGHSCORES);
}

addNewHighScore("philip", 1, 5);
addNewHighScore("Maja", 9, 10);

