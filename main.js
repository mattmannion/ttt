//
//  WELCOME TO TIC-TAC-TOE // CONSOLE-PROMPT-EDITION
//

///////////////////////////////////////
/////////////// Data //////////////////
///////////////////////////////////////

const player = {
  x: 'X',
  o: 'O',
  e: '_',
};

let board = {
  a: ['_', '_', '_'],
  b: ['_', '_', '_'],
  c: ['_', '_', '_'],
};

let square = {
  a0: board.a[0],
  a1: board.a[1],
  a2: board.a[2],
  b0: board.b[0],
  b1: board.b[1],
  b2: board.b[2],
  c0: board.c[0],
  c1: board.c[1],
  c2: board.c[2],
};

let logic = {
  loopA: true, //outer while loop
  loopB: true, //inner while loop
  continue: true, //controls the quit function
  fc: true, //logic gate [generic flow controller]
};

let setTurn; // converts Math.random to X/Y for first turn
let answer; // stores user input from turn to turn
let currentTurn; // handles current player's turn

///////////////////////////////////////
/////// Function Definitions //////////
///////////////////////////////////////

function setPlayer() {
  setTurn = Math.trunc(Math.random() * 2);

  if (setTurn === 1) currentTurn = player.x;
  else currentTurn = player.o;
}

function printBoard() {
  board.a[0] = square.a0;
  board.a[1] = square.a1;
  board.a[2] = square.a2;
  board.b[0] = square.b0;
  board.b[1] = square.b1;
  board.b[2] = square.b2;
  board.c[0] = square.c0;
  board.c[1] = square.c1;
  board.c[2] = square.c2;

  console.log(`
  :0-1-2:
a: ${board.a}
b: ${board.b}
c: ${board.c}
 `);
}

function turn() {
  if (currentTurn === player.x) currentTurn = player.o;
  else currentTurn = player.x;
}

function results() {
  if (
    //left to right   [top]
    (board.a[0] === player.x && board.a[1] === player.x && board.a[2] === player.x) ||
    //left to right   [middle]
    (board.b[0] === player.x && board.b[1] === player.x && board.b[2] === player.x) ||
    //left to right   [bottom]
    (board.c[0] === player.x && board.c[1] === player.x && board.c[2] === player.x) ||
    //top left to bottom right [diagonal]
    (board.a[0] === player.x && board.b[1] === player.x && board.c[2] === player.x) ||
    //bottom left to top right [diagonal]
    (board.a[2] === player.x && board.b[1] === player.x && board.c[0] === player.x) ||
    //top to bottom   [left]
    (board.a[0] === player.x && board.b[0] === player.x && board.c[0] === player.x) ||
    //top to bottom   [middle]
    (board.a[1] === player.x && board.b[1] === player.x && board.c[1] === player.x) ||
    //top to bottom   [right]
    (board.a[2] === player.x && board.b[2] === player.x && board.c[2] === player.x)
  ) {
    console.log(`
  /////////////////////////////
  ////////// X Wins! //////////
  /////////////////////////////
    `);
    return false;
  } else if (
    //left to right   [top]
    (board.a[0] === player.o && board.a[1] === player.o && board.a[2] === player.o) ||
    //left to right   [middle]
    (board.b[0] === player.o && board.b[1] === player.o && board.b[2] === player.o) ||
    //left to right   [bottom]
    (board.c[0] === player.o && board.c[1] === player.o && board.c[2] === player.o) ||
    //top left to bottom right [diagonal]
    (board.a[0] === player.o && board.b[1] === player.o && board.c[2] === player.o) ||
    //bottom left to top right [diagonal]
    (board.a[2] === player.o && board.b[1] === player.o && board.c[0] === player.o) ||
    //top to bottom   [left]
    (board.a[0] === player.o && board.b[0] === player.o && board.c[0] === player.o) ||
    //top to bottom   [middle]
    (board.a[1] === player.o && board.b[1] === player.o && board.c[1] === player.o) ||
    //top to bottom   [right]
    (board.a[2] === player.o && board.b[2] === player.o && board.c[2] === player.o)
  ) {
    console.log(`
    /////////////////////////////
    ////////// O Wins! //////////
    /////////////////////////////
    `);
    return false;
  } else if (
    board.a[0] !== player.e &&
    board.a[1] !== player.e &&
    board.a[2] !== player.e &&
    board.b[0] !== player.e &&
    board.b[1] !== player.e &&
    board.b[2] !== player.e &&
    board.c[0] !== player.e &&
    board.c[1] !== player.e &&
    board.c[2] !== player.e
  ) {
    console.log(`
    /////////////////////////////
    ///////// Tie Game! /////////
    /////////////////////////////
    `);
    return false;
  } else return true;
}

function setSq() {
  let key;

  Object.entries(square).forEach(e => {
    if (answer === e[0]) key = e[0];
  });
  if (answer === key && square[key] === player.e) {
    square[key] = currentTurn;
    logic.loopB = false;
  } else {
    console.log('Enter a valid square...');
    logic.loopB = true;
  }
}

function input() {
  console.log(`It's ${currentTurn}'s turn...`);
  let checkAns = '';
  checkAns = prompt(`
  It's ${currentTurn}'s turn...
  Enter the desired free space:

  Enter "Q/q" to Quit.

  Open your browser's console to play.
  `);
  if (
    checkAns === 'a0' ||
    checkAns === 'a1' ||
    checkAns === 'a2' ||
    checkAns === 'b0' ||
    checkAns === 'b1' ||
    checkAns === 'b2' ||
    checkAns === 'c0' ||
    checkAns === 'c1' ||
    checkAns === 'c2'
  ) {
    answer = checkAns;
    logic.loopB = false;
  } else if (checkAns === 'q' || checkAns === 'Q' || checkAns === null) {
    logic.continue = false;
    logic.loopB = false;
    console.log('you quit the game...');
  } else {
    console.log(`
  Please enter a valid row and column.
  ex: a0 [row => column]
  `);
    logic.loopB = true;
  }
}

///////////////////////////////////////
/////////// Function Calls ////////////
///////////////////////////////////////

function gameLoop() {
  console.log(`
/////////////////////////////
// Welcome to Tic-Tac-Toe! //
/////////////////////////////
`);

  setPlayer();
  printBoard();

  while (logic.loopA) {
    logic.fc = results();
    if (logic.fc) {
      while (logic.loopB) {
        input();
        if (logic.continue) setSq();
        else logic.loopB = false;
      }
    }
    if (!logic.continue) logic.loopA = false;
    else {
      if (logic.fc) {
        printBoard();
        turn();
        logic.loopB = true;
      } else logic.loopA = false;
    }
  }
}

gameLoop();
