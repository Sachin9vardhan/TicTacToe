let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newBtn = document.querySelector("#newBtn");
let newGame = document.querySelector(".newGame");
let msg = document.querySelector("#msg");
let container = document.querySelector(".container");
let h1 = document.querySelector("h1");

let turnO = true;
const play = () => {
  container.classList.add("hide");
  reset.classList.add("hide");
  h1.classList.add("hide");
};

// 2D array
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  trueO = true;
  enableBoxes();
  boxes.forEach((box) => {
    box.innerText = "";
  });
  newGame.classList.add("hide");
  container.classList.remove("hide");
  reset.classList.remove("hide");
  h1.classList.remove("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    // important ***
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
  }
};
const showWinner = (winner) => {
  play();
  msg.innerText = `Congratulations! Winner is ${winner}`;
  newGame.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winPattern) {
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;

    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3) {
        showWinner(p1);
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
