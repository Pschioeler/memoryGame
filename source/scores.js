const HIGHSCORES = "highScoreList";
const myArray = ["player1", 100, 10];
var stringArray;

/*
convertToArray("player1", 100, 10);
function convertToArray (player, points, turns) {
    HIGHSCORES.push(player, points, turns);

    string = JSON.stringify(HIGHSCORES);
    
    localStorage.setItem("HIGHSCORES", string)}
*/


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

const retrievedArray = getArrayFromLocalStorage(HIGHSCORES);
if (retrievedArray !== null) {
  console.log('Retrieved Array:', retrievedArray);
} else {
  console.log('Array not found in localStorage.');
}

console.log(retrievedArray);