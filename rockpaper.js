
const userChooses = document.querySelectorAll('.images')
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissor = document.querySelector(".scissor")
const userMsg = document.querySelector(".user-msg")
const compMsg = document.querySelector(".comp-msg")
let gameMsg = document.querySelector(".game-msg")
let score = document.querySelector(".score")



let compChoosed;
let userChoosed;
let compCounter = 0;
let userCounter = 0;
let drawCounter = 0;




function computerPlay() {

    randomNum = Math.random()
    if (randomNum < 1 / 3) {
        compChoosed = "rock"
    } else if (randomNum > 1 / 3 && randomNum < 2 / 3) {
        compChoosed = "paper"
    } else {
        compChoosed = "scissor"
    }
   
    compMsg.innerHTML = `Computer Choosed:${compChoosed} `

}

function renderMsg() {
    
    if (userChoosed === compChoosed) {
        gameMsg.innerHTML = `you choosed ${userChoosed} and computer choosed ${compChoosed} draw!`
        drawCounter++
    }
    else if (userChoosed === "rock" && compChoosed === "paper") {
        gameMsg.innerHTML = `you choosed ${userChoosed} and computer choosed ${compChoosed} You lose!`
        compCounter++;

    } else if (userChoosed === "rock" && compChoosed === "scissor") {
        gameMsg.innerHTML = `you choosed ${userChoosed} and computer choosed ${compChoosed} You win!`
        userCounter++

    } else if (userChoosed === "paper" && compChoosed === "rock") {
        gameMsg.innerHTML = `you choosed ${userChoosed} and computer choosed ${compChoosed} You win!`
        userCounter++

    } else if (userChoosed === "paper" && compChoosed === "scissor") {
        gameMsg.innerHTML = `you choosed ${userChoosed} and computer choosed ${compChoosed} You lose!`
        compCounter++;

    } else if (userChoosed === "scissor" && compChoosed === "rock") {
        gameMsg.innerHTML = `you choosed ${userChoosed} and computer choosed ${compChoosed} You lose!`
        compCounter++;
    }
    else if (userChoosed === "scissor" && compChoosed === "paper") {
        gameMsg.innerHTML = `you choosed ${userChoosed} and computer choosed ${compChoosed} You win!`
        userCounter++
    }
    score.innerHTML = `scores= computer:${compCounter} | user:${userCounter} | Draw:${drawCounter}`

}
userChooses.forEach(userChoose => {
    userChoose.addEventListener('click', (e) => {
        userChoosed = e.target.classList.value
        userMsg.innerHTML = `User Choosed: ${userChoosed}`
        computerPlay()
       
        renderMsg();

    })
})