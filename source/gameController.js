/*  compareCards
    if the values are equal
        disable the cards from being able to get clicked
        pointCounter
        other person's turn
    else
        flip cards back
        other person's turn
*/

let flippedTiles = [];


// Function to handle tile clicks
function handleTileClick(e) {
    let tile = e.target;
  if (flippedTiles.length < 2) {
    //tile.classList.add('flipped'); can be used for styling later
    flippedTiles.push(tile.value);

    if (flippedTiles.length === 2) {
      // Two tiles have been flipped; check if they match
      doTilesMatch(flippedTiles[0], flippedTiles[1]);
    }
  }
}


function doTilesMatch(tile1, tile2) {
  if (tile1 == tile2) {
    tile1.disabled = true;
    tile2.disabled = true;
    console.log("Its a match");
    flippedTiles = [];
    //increase player points;
    //make it the other persons turn;
  } else {
    // flippedTiles.forEach((tile) => {
    //     tile.classList.remove('flipped');
    //   });
    console.log("womp womp");
    flippedTiles = [];
  }
};


/*  pointCounter
    fetch elements which's innerHTML i wanna change
    player.points++;
    element.innerHTML = `${this.player}'s points: ${this.player.points}`
 */

/*  Turn controller
    playerOneTurn = true; (declare this outside of function)
    if (playerOneTurn) indicate by css or innerhtml change
    else do the indicator but for player 2's circle/innerhtml

*/

