const HIGHSCORES = "highScores";
var HighScoreDiv = document.getElementById("highScoreListDiv");

// Function to add a new highscore
// EXAMPLE: addNewHighScore("philip", 1500, 5);
function addNewHighScore(player, points, turns) {
    // Retrieve the existing high scores array from local storage, if any
    let highScores = JSON.parse(localStorage.getItem(HIGHSCORES)) || [];
  
    // Create a new object
    const newHighScore = {
        player: player,
        points: points,
        turns: turns
    };
  
    // Push the new highscore object into the array
    highScores.push(newHighScore);
  
    // Save the updated high scores array as a string in local storage
    localStorage.setItem(HIGHSCORES, JSON.stringify(highScores));  
    console.log('New high score added:', newHighScore);
    displayHighScores();
}


// Function to display highscores
function displayHighScores() {
      // Retrieve the highscores array from local storage
      let highScores = JSON.parse(localStorage.getItem('highScores'));
  
      if (highScores && highScores.length > 0) {
        // Sort the highscores by points
        highScores.sort((a, b) => b.points - a.points);

        // removes excess highscores
        if (highScores.length > 10) {
          highScores.pop();
          localStorage.setItem(HIGHSCORES, JSON.stringify(highScores)); 
        }

        // Clear any previous content in the element
        HighScoreDiv.innerHTML = "";
  
        // Create a div for each high score and append it to the element
        highScores.forEach((score, index) => {
          const scoreDiv = document.createElement('div');
          scoreDiv.className = 'high-score';
          scoreDiv.innerHTML = `
            <strong>${index + 1}. ${score.player} - ${score.points} points | ${score.turns} turns </strong>`;
          HighScoreDiv.appendChild(scoreDiv);
        });
      } else {
        // If there are no high scores
        HighScoreDiv.textContent = 'No high scores available.';
      }
  }

// function to clear local storage
function clearHighScores () {
    localStorage.clear();
    displayHighScores();
}
  
 //clearHighScores();
displayHighScores();

addNewHighScore("player 1", 2000, 25);
addNewHighScore("player 1", 1500, 25);
addNewHighScore("player 2", 1500, 25);

  
