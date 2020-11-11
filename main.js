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

const x = '';
const o = '';

let setPlayer, currentTurn, answer;
let score = 0;

///////////////////////////////////////
/////// Function Definitions //////////
///////////////////////////////////////

function setBoard(player) {
  board.a[0] = player;
  board.a[1] = player;
  board.a[2] = player;

  console.log(`
   :1-2-3:
 a: ${board.a}
 b: ${board.b}
 c: ${board.c}
  `);
}

function result(a, b, c) {
  if (
    //left to right   [top]
    (a[0] === player.x && a[1] === player.x && a[2] === player.x) ||
    //left to right   [middle]
    (b[0] === player.x && b[1] === player.x && b[2] === player.x) ||
    //left to right   [bottom]
    (c[0] === player.x && c[1] === player.x && c[2] === player.x) ||
    //top left to bottom right [diagonal]
    (a[0] === player.x && b[1] === player.x && c[2] === player.x) ||
    //bottom left to top right [diagonal]
    (a[2] === player.x && b[1] === player.x && c[0] === player.x) ||
    //top to bottom   [left]
    (a[0] === player.x && b[0] === player.x && c[0] === player.x) ||
    //top to bottom   [middle]
    (a[1] === player.x && b[1] === player.x && c[1] === player.x) ||
    //top to bottom   [right]
    (a[2] === player.x && b[2] === player.x && c[2] === player.x)
  ) {
    console.log(`x wins`);
    return player.x, false;
  } else if (
    //left to right   [top]
    (a[0] === player.o && a[1] === player.o && a[2] === player.o) ||
    //left to right   [middle]
    (b[0] === player.o && b[1] === player.o && b[2] === player.o) ||
    //left to right   [bottom]
    (c[0] === player.o && c[1] === player.o && c[2] === player.o) ||
    //top left to bottom right [diagonal]
    (a[0] === player.o && b[1] === player.o && c[2] === player.o) ||
    //bottom left to top right [diagonal]
    (a[2] === player.o && b[1] === player.o && c[0] === player.o) ||
    //top to bottom   [left]
    (a[0] === player.o && b[0] === player.o && c[0] === player.o) ||
    //top to bottom   [middle]
    (a[1] === player.o && b[1] === player.o && c[1] === player.o) ||
    //top to bottom   [right]
    (a[2] === player.o && b[2] === player.o && c[2] === player.o)
  ) {
    console.log(`y wins`);
    return player.o, false;
  } else console.log(`tie`);
  return false;
}

function input() {
  alert(`It's ${currentTurn}'s Turn!`);
  answer = prompt('Enter the desired free space').toString();
  return answer;
}

function turnMove(currentTurn) {
  if (currentTurn === player.x) {
    currentTurn = player.o;
    console.log("Its O's Turn...");
  } else if (currentTurn === player.o) {
    currentTurn = player.x;
    console.log("Its X's Turn...");
  } else {
    console.log('please enter X or Y');
  }
}

function setAndCheck(answer) {
  let key;
  Object.entries(square).forEach(e => {
    if (answer === e[0]) key = e[0];
  });
  if (answer === key) {
    score++;
    return (square[key] = currentTurn);
  } else console.log('Enter a valid square...');
}

function printBoard() {
  let key;
  Object.entries(square).forEach(e => {
    key = e[0];
    board.a;
  });

  for (let i = 0; i < board.a.length; i++) {
    board.a[i] = player.e;
    board.b[i] = player.e;
    board.c[i] = player.e;
  }
  console.log(`
  :0-1-2:
a: ${board.a}
b: ${board.b}
c: ${board.c}
 `);
}

///////////////////////////////////////
/////////// Function Calls ////////////
///////////////////////////////////////

// Set Empty Board and Initialize X or O

(function () {
  setPlayer = Math.trunc(Math.random() * 2);

  if (setPlayer === 1) {
    currentTurn = player.x;
    console.log("It's X's turn.");
  } else {
    currentTurn = player.o;
    console.log("It's O's turn.");
  }
  printBoard();
})();

// input();
setAndCheck('a1');
printBoard();
