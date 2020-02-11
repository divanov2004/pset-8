///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn;
let win;
let xWinCount = 0;
let oWinCount = 0;
let tieCount = 0;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];
  turn = first();
  win = null;
  render();
}

function first() {
  do {
    var a = window.prompt("Who goes first?")
    if (a == null) {
      // on purpose
    }
    a = String(a)
    a = a.toUpperCase()
    if (a != "X" && a != "x" && a != "O" && a != "o") {
      window.alert("Invalid value. Please type either X or O.")
    }
  } while (a != "X" && a != "x" && a != "O" && a != "o" && a != null)
  return a
}

function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;
  });
  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
}

function takeTurn(e) {
  if (!win) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });
    if (board[index] === "") {
      board[index] = turn;
      turn = turn === "X" ? "O" : "X";
      win = getWinner();
      if (win === "T") {
        tieCount++;
        document.getElementById("thirdList").innerHTML = tieCount;
      }
      render();
    }
  }
}

function getWinner() {
  let winner = null;
  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {
      winner = board[condition[0]];
      if (winner === "X") {
        xWinCount++;
        document.getElementById("list").innerHTML = xWinCount;
      }
      if (winner === "O") {
        oWinCount++;
        document.getElementById("secondList").innerHTML = oWinCount;
      }
  }
});
  return winner ? winner : board.includes("") ? null : "T";
}
