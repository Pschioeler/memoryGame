const gameTiles = [];

for (let i = 0; i < 50; i++) {
    gameTiles.push(i,i)
};


// randomSort shuffles an array randomly.
// This sorting method is based on the famous algorithm known as the Fisher-Yates Shuffle
function randomSort (array) {
    var m = array.length, t, i;

  // While there remain elements to shuffle
  while (m) {

    // Pick a remaining element
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

randomSort(gameTiles);
console.log(gameTiles);


function createBoard() {
  const board = document.getElementById('gameboard');

  for (let i = 0; i < 10; i++) {
      var row = document.createElement('div');
      row.className = 'row';

      for (let j = 0; j < 10; j++) {
          let index = i * 10 + j;
          let value = gameTiles[index]; // Get the value from gameTiles
          let button = document.createElement('button');
          button.className = 'column';
          button.value = value; // Set the value attribute
          button.addEventListener('click', handleTileClick);
          row.appendChild(button);
      }

      board.appendChild(row);
  }
}

createBoard();

// Script for timeren
const timerh3 = document.getElementById('timer');
let totalSeconds = 0;
let isPaused = false;

function printTimer() {
  if (!isPaused){
    totalSeconds++;
  
    const minutesValue = Math.floor(totalSeconds / 60);
    const secondsValue = totalSeconds % 60;
  
    const preMinutes = minutesValue.toString().padStart(2, '0');
    const preSeconds = secondsValue.toString().padStart(2, '0');
    // padStart bruges for at formatterer tallene til at være '01' i stedet for '1'
  
    timerh3.textContent = preMinutes + ':' + preSeconds; 
    document.title = preMinutes + ':' + preSeconds + " - Arkaden Vendespil";
  }
}
let timer = setInterval(printTimer, 1000);
function startTimer() {timer};
function resetTimer() {totalSeconds = 0};
function pauseTimer() {
  if(!isPaused){
    isPaused = true
  } else {
    isPaused = false;
  }
};
startTimer();