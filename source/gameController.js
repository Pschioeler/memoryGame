//SFX and background music
let correct = new Audio("/source/correct.mp3");
let incorrect = new Audio("/source/incorrect.mp3");
let confetti = new Audio("/source/confetti.mp3");
let background = new Audio("/source/background.mp3");
correct.volume = 0.5;
incorrect.volume = 0.5;
background.volume = 0.3;
background.loop = true;

background.play();

let flippedTiles = [];
let isplayerOneTurn = true;
let playerOnePoints = 0;
let playerTwoPoints = 0;

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2"); 

// Function to handle tile clicks
function handleTileClick(e) {

    let tile = e.target;
    tile.innerHTML = tile.value;
    //Temporarily disabled indicating it can't be chosen twice
    tile.disabled = true;
    tile.classList.add("flipped");
    
    //If less than two tiles are clicked, add them to an array
    if (flippedTiles.length < 2) {
        flippedTiles.push(tile);
    }
    //If exactly two tiles are selected, match them against each other
    if (flippedTiles.length === 2) {
      doTilesMatch(flippedTiles[0], flippedTiles[1]);
    }

  }

  //Function to see if the selected tiles match
function doTilesMatch(tile1, tile2) {
  if (tile1.value == tile2.value) {
    //Disable them so they can't be chosen again
    tile1.disabled = true;
    tile2.disabled = true;
    console.log("Its a match");
    flippedTiles = [];
    correct.play();

    pointController();
  } else {
    const buttons = document.querySelectorAll(".column");
    //Delay for user friendliness
    incorrect.play();

    buttons.forEach(button => {
      button.classList.add("cursorHidden");
    });

    document.body.classList.add("cursorHidden");
    
    setTimeout(() => {   

      buttons.forEach(button => {
        button.classList.remove("cursorHidden");
      });
      document.body.classList.remove("cursorHidden");
        tile1.disabled = false;
        tile2.disabled = false;
        tile1.innerHTML = "";
        tile2.innerHTML = "";
        //Unflip them
        flippedTiles.forEach((tile) => {
            tile.classList.remove('flipped');
        });
        console.log("womp womp");
        flippedTiles = [];
        turnController();
      }, 1000);

  }
};

//Changes whose turn it is
function turnController() {

    let turn =  document.getElementById("turn");
    turn.innerHTML = "";
    isplayerOneTurn = !isplayerOneTurn;
    
    if (isplayerOneTurn === true) turn.innerHTML = "It's Player One's turn!"
    else turn.innerHTML = "It's Player Two's turn!";
}

//Increases play points by one
function pointController() {
    
    if (isplayerOneTurn === true) {
        playerOnePoints++;
        p1.innerHTML = "";
        p1.innerHTML = `Player One - ${playerOnePoints}`;
    } else {
        playerTwoPoints++;
        p2.innerHTML = "";
        p2.innerHTML = `Player Two - ${playerTwoPoints}`
    }
}

//Reset point scores
function resetPoints() {
  playerOnePoints = 0;
  playerTwoPoints = 0;
  p1.innerHTML = "";
  p1.innerHTML = `Player One - ${playerOnePoints}`;
  p2.innerHTML = "";
  p2.innerHTML = `Player Two - ${playerTwoPoints}`;
}


// Create and update timer
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
    // padStart to formate the numbers as '01' instead of '1'
  
    timerh3.textContent = preMinutes + ':' + preSeconds; 
    document.title = preMinutes + ':' + preSeconds + " - Arkaden Vendespil";
  }
}
function startTimer() {setInterval(printTimer, 1000);};
function resetTimer() {totalSeconds = 0};
function pauseTimer() {
  if(!isPaused){
    isPaused = true
  } else {
    isPaused = false;
  }
};


// Start game
function startGame() {
  const buttons = document.querySelectorAll('.column');
  buttons.forEach((button) => {
    button.removeAttribute('disabled');
  });
  startTimer();
  background.play();
}


/*
  Gør brættet interaktivt
    forEach .column button.disabled = false;
  startTimer()
  background.play()
*/

// Restart game

function restartGame(){
  createBoard();
  resetTimer();
  resetPoints();
  flippedTiles = []; // Clear array in case user flipped 1 tile before resetting
}
/*
  Slet nuværrende bræt
  createBoard()
  resetTimer()
  Clear flipped array liste
  playerOnePoints = 0;
  playerTwoPoints = 0;
*/

/* Victory screen

  pauseTimer()
  addNewHighScore()

*/
