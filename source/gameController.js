let flippedTiles = [];

// Function to handle tile clicks
function handleTileClick(e) {

    let tile = e.target;
    tile.innerHTML = tile.value;
    tile.disabled = true;
    tile.classList.add("flipped");
    
    if (flippedTiles.length < 2) {
        flippedTiles.push(tile);
    }

    if (flippedTiles.length === 2) {
      doTilesMatch(flippedTiles[0], flippedTiles[1]);
    }

  }

function doTilesMatch(tile1, tile2) {
  if (tile1.value == tile2.value) {
    tile1.disabled = true;
    tile2.disabled = true;
    console.log("Its a match");
    flippedTiles = [];
    //increase player points;
    //make it the other persons turn;
  } else {
    setTimeout(() => {   
        tile1.disabled = false;
        tile2.disabled = false;
        tile1.innerHTML = "";
        tile2.innerHTML = "";

        flippedTiles.forEach((tile) => {
            tile.classList.remove('flipped');
        });
        console.log("womp womp");
        flippedTiles = [];
      }, 1000);

  }
};

/*  Turn controller
    playerOneTurn = true; (declare this outside of function)
    if (playerOneTurn) indicate by css or innerhtml change
    else do the indicator but for player 2's circle/innerhtml

*/

/*  pointCounter
    fetch elements which's innerHTML i wanna change
    player.points++;
    element.innerHTML = `${this.player}'s points: ${this.player.points}`
 */



