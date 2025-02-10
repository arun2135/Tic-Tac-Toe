let boxes = document.querySelectorAll(".box");
let container = document.querySelector(".container");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //PlayerO and PlayerX

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// boxes.addEventListener("click", function() {
  
// });




boxes.forEach((box) => {
  box.addEventListener("click", () => {
    document.getElementById("clickSound").play();
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = true;
  }
}

const enableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}



const resetGame = ()=>{
  enableBoxes();
  for(let box of boxes){
    msgContainer.classList.add("hide");
    container.style.display="flex";
    resetBtn.style.display="flex";

  }
}

const showWinner = (winner)=>{
  msg.innerText = `Congratulations, Winner ${winner}`;
  msgContainer.classList.remove("hide");
  container.style.display="none";
  resetBtn.style.display="none";
  

}



const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if ((pos1Val == pos2Val && pos2Val == pos3Val)) {
        console.log("Winner is",boxes[pattern[0]].innerHTML);
        // msg.innerHTML= "Congratulations, You Won";
        showWinner(pos1Val);
        disableBoxes();

      }
    }
  }
};




// Adding event listener to reset and new game button
// resetBtn.addEventListener("click",()=>{
//   resetGame();
// })

// newBtn.addEventListener("click",()=>{
//   resetGame();
// })

resetBtn.addEventListener("click",resetGame)
newBtn.addEventListener("click",resetGame)


