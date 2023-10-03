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