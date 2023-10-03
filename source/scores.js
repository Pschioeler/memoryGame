const HIGHSCORES = "highScoreList";
const HIGHSCORESARRAY = [];
var stringArray;

function addNewHighScore (player, points, turns) {
    // push new highscore elements to array
    HIGHSCORESARRAY.push(player, points, turns)
    // converts highscore array to string
    stringArray = JSON.stringify(HIGHSCORESARRAY);
    //saves highscore in localstorage
    localStorage.setItem(HIGHSCORES, stringArray);


} 

function displayHighScores (key) {
    stringArray = localStorage.getItem(key);
    // return null if the key dont exists
    if (stringArray === null) {
        return null;
    }
    array = JSON.parse(stringArray);
    return array;
}

saveHighScore(HIGHSCORES, HIGHSCORESARRAY);

const retrievedArray = displayHighScore(HIGHSCORES);
if (retrievedArray !== null) {
  console.log('Retrieved Array:', retrievedArray);
} else {
  console.log('Array not found in localStorage.');
}