let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#cpu-score");

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = ()=>{
    msg.style.backgroundColor = "rgb(219, 219, 99)";
    msg.innerText = "Game was Draw.Please Play Again";
};

const showWinner = (userWin,userChoice,compChoice)=> {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.style.backgroundColor = "green";
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "red";
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`
    }
}

const playGame = (userChoice) =>{
    console.log("User Choice = ", userChoice);

    const compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{ 
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    }); 
});