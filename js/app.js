const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");

let hitPosition;
let timerId = null;
let result =0;
let currentTime = 30;

function randomSquare() {
    squares.forEach((square) => {
        square.classList.remove("mole");

    })
    let randomSquare= squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add("mole");
    hitPosition = randomSquare.id
}

squares.forEach((square) => {
    square.addEventListener("mousedown",() => {
        if(square.id == hitPosition) {
            result++;
            score.textContent =result;
            hitPosition = null;
        }
    })
})


function moveMole() {
    timerId = setInterval(randomSquare,300);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if(currentTime == 0) {
        timeLeft.textContent = currentTime;
        clearInterval(countDownTimerid);
        clearInterval(timerId);
        alert("Game over! Your final score is" + result);
    }
}


let countDownTimerid = setInterval(countDown,1000)
