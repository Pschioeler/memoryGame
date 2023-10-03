const HIGHSCORES = "highScoreList";
const myArray = ["player1", 100, 10];
var stringArray;

function saveHighScore (key, array) {
    stringArray = JSON.stringify(array);
    localStorage.setItem(key, stringArray);
}

function checkHighScore () {

}

function displayHighScore (key) {
    stringArray = localStorage.getItem(key);
    // return null if the key dont exists
    if (stringArray === null) {
        return null;
    }
    array = JSON.parse(stringArray);
    return array;
}

function sortHighScore () {

}

function clearHighScore () {

}

saveHighScore(HIGHSCORES, myArray);

const retrievedArray = displayHighScore(HIGHSCORES);
if (retrievedArray !== null) {
  console.log('Retrieved Array:', retrievedArray);
} else {
  console.log('Array not found in localStorage.');
}