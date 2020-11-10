/*
  WELCOME TO TIC-TAC-TOE
*/
let currentTurn = 0,
  answer;

const player = {
  x: 'X',
  y: 'Y',
  e: '_',
  timer: 0, //ms
};

let board = {
  a: ['_', '_', '_'],
  b: ['_', '_', '_'],
  c: ['_', '_', '_'],
};

function gameStart() {
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
}

function setBoard(player, _) {
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
  )
    console.log(`x wins`);
  else if (
    //left to right [top]
    (a[0] === player.y && a[1] === player.y && a[2] === player.y) ||
    //left to right [top]
    (b[0] === player.y && b[1] === player.y && b[2] === player.y) ||
    //left to right [top]
    (b[0] === player.y && b[1] === player.y && b[2] === player.y) ||
    //top left to bottom right [diagonal]
    (a[0] === player.y && b[1] === player.y && c[2] === player.y) ||
    //bottom left to top right [diagonal]
    (a[2] === player.y && b[1] === player.y && c[0] === player.y) ||
    //top to bottom [left]
    (a[0] === player.y && b[0] === player.y && c[0] === player.y) ||
    //top to bottom [middle]
    (a[1] === player.y && b[1] === player.y && c[1] === player.y) ||
    //top to bottom [right]
    (a[2] === player.y && b[2] === player.y && c[2] === player.y)
    //end
  )
    console.log(`y wins`);
  else console.log(`tie`);
}

function gameLoop() {
  main();
  setBoard(player.e);
}

function main() {
  answer = prompt('Enter either x or y');
  console.log(answer);
}

gameStart();
// gameLoop();
