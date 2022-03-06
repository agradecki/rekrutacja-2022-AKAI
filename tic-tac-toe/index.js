let turn = "x";
let symbols = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));
const resetBtn = document.querySelector("#resetButton");
const allTiles = document.querySelectorAll(".tile");

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  checkWin();
});

const displayTurn = (turn) => {
  const h1 = document.querySelector(".turn");
  h1.innerHTML = `${turn === "x" ? "X turn" : "O turn"}`;
};

const checkWin = () => {
  if (
    symbols[0][0] !== "" &&
    symbols[0][0] === symbols[1][0] &&
    symbols[0][0] === symbols[2][0]
  ) {
    alert(`${symbols[0][0] === "x" ? "X win!" : "O win!"}`);
    reset();
  } else if (
    symbols[0][1] !== "" &&
    symbols[0][1] === symbols[1][1] &&
    symbols[0][1] === symbols[2][1]
  ) {
    alert(`${symbols[0][1] === "x" ? "X win!" : "O win!"}`);
    reset();
  } else if (
    symbols[0][2] !== "" &&
    symbols[0][2] === symbols[1][2] &&
    symbols[0][2] === symbols[2][2]
  ) {
    alert(`${symbols[0][2] === "x" ? "X win!" : "O win!"}`);
    reset();
  } else if (
    symbols[0][0] !== "" &&
    symbols[0][0] === symbols[0][1] &&
    symbols[0][0] === symbols[0][2]
  ) {
    alert(`${symbols[0][0] === "x" ? "X win!" : "O win!"}`);
    reset();
  } else if (
    symbols[1][0] !== "" &&
    symbols[1][0] === symbols[1][1] &&
    symbols[1][0] === symbols[1][2]
  ) {
    alert(`${symbols[1][0] === "x" ? "X win!" : "O win!"}`);
    reset();
  } else if (
    symbols[2][0] !== "" &&
    symbols[2][0] === symbols[2][1] &&
    symbols[2][0] === symbols[2][2]
  ) {
    alert(`${symbols[2][0] === "x" ? "X win!" : "O win!"}`);
    reset();
  } else if (
    symbols[0][0] !== "" &&
    symbols[0][0] === symbols[1][1] &&
    symbols[0][0] === symbols[2][2]
  ) {
    alert(`${symbols[0][0] === "x" ? "X win!" : "O win!"}`);
    reset();
  } else if (
    symbols[2][0] !== "" &&
    symbols[2][0] === symbols[1][1] &&
    symbols[2][0] === symbols[0][2]
  ) {
    alert(`${symbols[2][0] === "x" ? "X win!" : "O win!"}`);
    reset();
  } else if (
    symbols[0][0] !== "" &&
    symbols[0][1] !== "" &&
    symbols[0][2] !== "" &&
    symbols[1][0] !== "" &&
    symbols[1][1] !== "" &&
    symbols[1][2] !== "" &&
    symbols[2][0] !== "" &&
    symbols[2][1] !== "" &&
    symbols[2][2] !== ""
  ) {
    alert("DRAW!");
  }
};

const reset = () => {
  symbols = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  for (i = 0; i < allTiles.length; i++) {
    allTiles[i].classList.remove("tile-o", "tile-x");
  }
};

resetBtn.addEventListener("click", reset);
