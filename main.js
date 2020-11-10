/*
  WELCOME TO TIC-TAC-TOE // PROMPT-CONSOLE EDITION
*/

// Data

const player = {
  x: 'X',
  o: 'O',
  e: '_',
  timer: 0, //ms
};

let board = {
  a: ['_', '_', '_'],
  b: ['_', '_', '_'],
  c: ['_', '_', '_'],
};

const x = '',
  o = '';

let setPlayer;
let currentTurn = 0;
let answers = []; //[0] = player, [1] = position

//Function Definitions

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

function result(a, b) {
  if (
    //left to right [top]
    (a[0] === player.x && a[1] === player.x && a[2] === player.x) ||
    //left to right [top]
    (b[0] === player.x && b[1] === player.x && b[2] === player.x) ||
    //left to right [top]
    (b[0] === player.x && b[1] === player.x && b[2] === player.x) ||
    //top left to bottom right [diagonal]
    (a[0] === player.x && b[1] === player.x && c[2] === player.x) ||
    //bottom left to top right [diagonal]
    (a[2] === player.x && b[1] === player.x && c[0] === player.x) ||
    //top to bottom [left]
    (a[0] === player.x && b[0] === player.x && c[0] === player.x) ||
    //top to bottom [middle]
    (a[1] === player.x && b[1] === player.x && c[1] === player.x) ||
    //top to bottom [right]main
    (a[2] === player.x && b[2] === player.x && c[2] === player.x)
    //end
  ) {
    console.log(`x wins`);
    return player.x, false;
  } else if (
    //left to right [top]
    (a[0] === player.o && a[1] === player.o && a[2] === player.o) ||
    //left to right [top]
    (b[0] === player.o && b[1] === player.o && b[2] === player.o) ||
    //left to right [top]
    (b[0] === player.o && b[1] === player.o && b[2] === player.o) ||
    //top left to bottom right [diagonal]
    (a[0] === player.o && b[1] === player.o && c[2] === player.o) ||
    //bottom left to top right [diagonal]
    (a[2] === player.o && b[1] === player.o && c[0] === player.o) ||
    //top to bottom [left]
    (a[0] === player.o && b[0] === player.o && c[0] === player.o) ||
    //top to bottom [middle]
    (a[1] === player.o && b[1] === player.o && c[1] === player.o) ||
    //top to bottom [right]
    (a[2] === player.o && b[2] === player.o && c[2] === player.o)
    //end
  ) {
    console.log(`y wins`);
    return player.o, false;
  } else console.log(`tie`);
  return false;
}

function gameLoop() {
  main();
  setBoard(player.e);
}

function input() {
  answer[0] = prompt('Enter either x or y');
  answer[1] = prompt('Now enter the desired free space');
  console.log(answer);
  return answers;
}

function turnMove(input) {
  if (input[0] === player.x) {
    currentTurn = player.o;
  } else if (input[0] === player.o) {
    currentTurn = player.x;
  } else {
    console.log('please enter X or Y');
  }
}

// Function Calls

//Set empty board and Initialize X or O
(function () {
  setPlayer = Math.trunc(Math.random() * 2);

  if (setPlayer === 1) currentTurn = player.x;
  else currentTurn = player.o;

  for (let i = 0; i < board.a.length; i++) {
    board.a[i] = player.e;
    board.b[i] = player.e;
    board.c[i] = player.e;
  }

  console.log(`
   :1-2-3:
 a: ${board.a}
 b: ${board.b}
 c: ${board.c}
  `);
})();

console.log(setPlayer, currentTurn);
// gameLoop();
