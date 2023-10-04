const HIGHSCORES = "highScoreList";
const HIGHSCORESARRAY = [];
const HIGHSCOREOBJECT = {HSName, HSPoints, HSTurns};
var stringArray;

function addNewHighScore (player, points, turns) {
    // push new highscore object to array
    newHighScore = Object.create(HIGHSCOREOBJECT);
    newHighScore.HSName = player;
    newHighScore.HSPoints = points;
    newHighScore.HSTurns = turns;
    HIGHSCORESARRAY.push(newHighScore);
    // sort highscore array


    // converts highscore array to string
    stringArray = JSON.stringify(HIGHSCORESARRAY);
    // saves highscore in localstorage
    localStorage.setItem(HIGHSCORES, stringArray);
    //update displayHighScores
    displayHighScores(HIGHSCORES)

} 

// mangler at blive implementeret
// sort skal sortere arrayt ud fra flest point, og hvis lige antal point, færrest ture
// den skal også fjerne uoverflødige scores (feks. hvis der er mere end 10 scores)
function sortHighScores (array) {

}

// to use: displayHighScores(HIGHSCORES);
function displayHighScores (key) {
    var listOfHighscores = document.getElementById("highScoreListDiv");
    stringArray = localStorage.getItem(key);
    let arrayOfStrings = [];
    arrayOfStrings = JSON.parse(stringArray);

    //clear div elements
    listOfHighscores.innerHTML = "";
    // return null if the key dont exists
    if (stringArray === null) {
        listOfHighscores.innerHTML = "";
    } else {
        arrayOfStrings.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<strong>Highscores ${index + 1} <strong><br>
            <ul>
                <li>Name 1: ${item.HSName}</li>
                <li>Points 2: ${item.HSPoints}</li>
                <li>Turns 3: ${item.HSTurns}</li>
            </ul>            
            `
            container.appendChild(itemElement);
        });
        /*
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
        }*/
    }
}

// clears local storage
function clearHighScores () {
    localStorage.clear();
    displayHighScores(HIGHSCORES);
}
clearHighScores();

addNewHighScore(tobias, 15, 10);    

displayHighScores(HIGHSCORES);

