//SFX and background music
let correct = new Audio("/source/correct.mp3");
let incorrect = new Audio("/source/incorrect.mp3");
let background = new Audio("/source/background.mp3");

correct.volume = 0.5;
incorrect.volume = 0.5;
background.volume = 0.3;
background.loop = true;

//Fetching HTML elements
const turn =  document.getElementById("turn");
const buttons = document.querySelectorAll(".column");
const confettiAnimation = document.getElementById("confetti");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2"); 

//Initializing starer variables
let flippedTiles = [];
let turnAmount = 1;
let isplayerOneTurn = true;
let playerOnePoints = 0;
let playerTwoPoints = 0;


// Function to check if all tiles are flipped - game over
function allColumnsFlipped() {
  const columns = document.querySelectorAll('.column');
  for (const column of columns) {
    if (!column.classList.contains('flipped')) {
      return false;
    }
  }
  return true;
}

// Function to handle tile clicks
function handleTileClick(e) {

    let tile = e.target;
    tile.innerHTML = tile.value;
    //Temporarily disabling tile, indicating it can't be chosen twice
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
    flippedTiles = [];
    correct.play();
    pointController();
    if(allColumnsFlipped()) gameEnded();
  } else {
    
    incorrect.play();

    //Disabling clicking, to avoid the user spamming clicks
    buttons.forEach(button => {
      button.classList.add("cursorHidden");
    });
    document.body.classList.add("cursorHidden");
    
    //Delay for user friendliness
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
        flippedTiles = [];
        turnController();
      }, 1000);
  }
};

//Changes whose turn it is
function turnController() {
    //Fetches root to be able to change its property. Used for different colors of hover, depending on whose turn it is
    var root = document.querySelector(':root');
    turn.innerHTML = "";
    isplayerOneTurn = !isplayerOneTurn;
    
    if (isplayerOneTurn === true) {
      root.style.setProperty('--hover', '#ec1800');
      turn.innerHTML = "It's Player One's turn!";
      turnAmount++;
    }
    else {
      root.style.setProperty('--hover', '#0629f1');
      turn.innerHTML = "It's Player Two's turn!";
    }
}

//Increases player points by one
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
    // padStart to format the numbers as '01' instead of '1'
  
    timerh3.textContent = preMinutes + ':' + preSeconds; 
    document.title = preMinutes + ':' + preSeconds + " - Arkaden Vendespil";
  }
}

let timer;

function startTimer() {timer = setInterval(printTimer, 1000); isPaused = false};

function resetTimer() {
  isPaused = false;
  totalSeconds = 0;
  clearInterval(timer); // Clear timer and create it again to ensure the first second tick is consistent
  timer = setInterval(printTimer, 1000);
  timerh3.textContent = '00:00';
  document.title = 'Arkaden';
};

function pauseTimer() {
  if(!isPaused){
    isPaused = true
  } else {
    isPaused = false;
  }
};

function enableBoard() {
  const buttons = document.querySelectorAll('.column');
  buttons.forEach((button) => {
    button.removeAttribute('disabled');
  });
};

// Start game
const startBtn = document.getElementById('start');
const restartBtn = document.getElementById('restart');
function startGame() {
  confettiAnimation.style.display = "none";
  turn.innerHTML = "It's Player One's Turn!";
  enableBoard();
  startTimer();
  background.play();
  startBtn.style.display = 'none';
  restartBtn.style.display = 'block';
}

// Restart game
function restartGame(){
  confettiAnimation.style.display = "none";
  isplayerOneTurn = false;
  turnController();
  createBoard();
  enableBoard();
  resetTimer();
  resetPoints();
  flippedTiles = []; // Clear array in case user flipped 1 tile before resetting
  restartBtn.textContent = "Restart Game"
}

// Victory screen/game concluded
function gameEnded() {
  if (playerOnePoints > playerTwoPoints) {
    turn.textContent = "Player One wins!"
    addNewHighScore("Player One", playerOnePoints, turnAmount);
    
  } else if (playerOnePoints == playerTwoPoints) {
    turn.textContent = "It's a tie!"
  } else {
    turn.textContent = "Player Two wins!"
    addNewHighScore("Player Two", playerTwoPoints, turnAmount);
    
  }
  confettiAnimation.style.display = "block";
  pauseTimer();
  restartBtn.textContent = "New Game"
}