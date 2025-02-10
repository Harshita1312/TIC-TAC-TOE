let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let msg = document.querySelector("#msg");
let turnmsg = document.querySelector("#turn");
let winnerMsg = document.querySelector(".winnerMsg");
let img = document.querySelector("img");
// let line = document.querySelector(".line");

let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turnO = true;

//winning pattern
const arr=[[0,1,2],[3,4,5],[6,7,8],
         [0,3,6],[1,4,7],[2,5,8],
         [2,4,6],[0,4,8]];

const resetGame = () =>{
    //music.remove();
    turnO = true;
    enableBoxes();
    winnerMsg.classList.add("hide");
    reset.classList.remove("hide");
    img.classList.remove("hide");
    music.pause();
    music.currentTime = 0;
    // line.classList.add("hide");
    count = 0;
}
let count = 0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        turn.play();
        if(turnO){
            box.innerText="O";
            turnO = false;
            turnmsg.innerText ="TURN OF X";
        }
        else{
            box.innerText="X";
            turnO = true;
            turnmsg.innerText ="TURN OF O";
        }
        box.disabled = true;
        count++;
        checkWinner();
        console.log("here",count);
        if(count == 9 && checkWinner() != true){
            msg.innerText = `Its a Draw`;
            console.log("HERE");
            gameover.play();
            turnmsg.innerText ="";
            winnerMsg.classList.remove("hide");
            reset.classList.add("hide");
            img.classList.add("hide");
        }
    });
});

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, winner is ${winner}`;
    music.play();
    winnerMsg.classList.remove("hide");
    reset.classList.add("hide");
    // line.classList.remove("hide");
    turnmsg.innerText ="";
    disableBoxes();
};


const checkWinner =() => {
    for (let pattern of arr) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner ", pos1);
                console.log([pattern[0]]);
                console.log([pattern[1]]);
                console.log([pattern[2]]);
                //showLine(pattern[0],pattern[1],pattern[2]);
                showWinner(pos1);
                return true;
            }
        }
    }
};

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

// const showLine = (pt1, pt2, pt3) =>{
    //     console.log("line displayed");
    //     if(pt1==0 && pt2==1 && pt3==2){
    //         line.style.transform ="translate(0vw, 6vw) ";
    //     }
    //     else if(pt1==3 && pt2==4 && pt3==5){
    //         line.style.transform ="translate(0vw, 26vw) ";
    //     }
    //     else if(pt1==6 && pt2==7 && pt3==8){
    //         line.style.transform ="translate(0vw, 42vw) ";
    //     }
    //     else if(pt1==0 && pt2==3 && pt3==6){
    //         line.style.transform ="translate(-18vw, 25vw) rotate(90deg)";
    //     }
    //     else if(pt1==1 && pt2==4 && pt3==7){
    //         line.style.transform ="translate(0vw, 25vw) rotate(90deg)";
    //     }
    //     else if(pt1==2 && pt2==5 && pt3==8){
    //         line.style.transform ="translate(18vw, 25vw) rotate(90deg)";
    //     }
    //     else if(pt1==0 && pt2==4 && pt3==8){
    //         line.style.transform ="translate(0vw, 26vw) rotate(45deg)";
    //     }
    //     else{
    //         line.style.transform ="translate(0vw, 26vw) rotate(-45deg)";
    //     }
    // };

