//
//  WELCOME TO TIC-TAC-TOE // PROMPT-CONSOLE EDITION
//

///////////////////////////////////////
/////////////// Data //////////////////
///////////////////////////////////////

const player = {
  x: 'X',
  o: 'O',
  e: '_',
  timer: 0, //milliseconds
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

// const x = '';
// const o = '';

let answer; // stores user input from turn to turn
let setTurn; // converts Math.random to X/Y for first turn
let currentTurn; // handles current player's turn
let endGame; // while look boolean
let turnCounter = 0;
let score = 0;
let loop = true;
let guard = true; //validates function operation between steps

///////////////////////////////////////
/////// Function Definitions //////////
///////////////////////////////////////

function setPlayer() {
  setTurn = Math.trunc(Math.random() * 2);

  if (setTurn === 1) {
    currentTurn = player.x;
    console.log('X goes first...');
  } else {
    currentTurn = player.o;
    console.log('O goes first...');
  }
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
  if (currentTurn === player.x) {
    currentTurn = player.o;
    console.log("Its O's Turn...");
  } else if (currentTurn === player.o) {
    currentTurn = player.x;
    console.log("Its X's Turn...");
  }
}

function result() {
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
    return score++, false;
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
    return score++, false;
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
  } else {
    return true;
  }
}

function setAndCheck() {
  let key;
  Object.entries(square).forEach(e => {
    if (answer === e[0]) key = e[0];
  });
  if (answer === key && square[key] === player.e) {
    square[key] = currentTurn;
    turnCounter++;
    return false;
  } else console.log('Enter a valid square...');
}

function gameStart() {
  let checkAns = '';
  checkAns = prompt('Enter the desired free space');

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
    console.log('upper', checkAns);

    return false;
  } else if (checkAns === null) {
    console.log('null', checkAns);
    console.log(`
  Please enter a valid row and column.
  ex: a0 [row => column]
  `);

    return true;
  } else {
    console.log('lower', checkAns);
    console.log(`
  Please enter a valid row and column.
  ex: a0 [row => column]
  `);

    return true;
  }
}

// Only lets a function pass if it completes correctly
function stepGuard(func) {
  if (guard) {
    // while (guard) {}
    guard = func;
    return 1;
  } else {
    console.log('Unexpected Failure...');
    return 0;
  }
}

function gameLoop() {
  loop = true;
  // Set Empty Board and Initialize X or O
  console.log(`
  /////////////////////////////
  // Welcome to Tic-Tac-Toe! //
  /////////////////////////////
  `);
  printBoard();
  setPlayer();

  console.log(stepGuard(gameStart()));
  // while (loop) {}
}

// function reset() {
//   for (let i = 0; i < board.length; i++) {
//     board.a[i] = player.e;
//     board.b[i] = player.e;
//     board.c[i] = player.e;
//   }

//   score = 0;
//   turnCounter = 0;

//   gameLoop;
// }

///////////////////////////////////////
/////////// Function Calls ////////////
///////////////////////////////////////

gameLoop();
