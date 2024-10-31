let playerTurn = 0;
let playerOneScore = [];
let playerTwoScore = [];

function initiategame() {
    let buttons = document.querySelectorAll(".tictactoebuttons");

    buttons.forEach((e) => { e.addEventListener("click", buttonpressed) });

    let playAgainButtion = document.querySelector("#playAgainbutton");
    playAgainButtion.addEventListener("click", playAgain);

}

function buttonpressed(e) {
    if (e.target.textContent != "") return;
    else if (playerTurn === 0) {
        e.target.textContent = "O";
        playerOneScore.push(e.target.id);
        if (checkWinner(playerOneScore)) {
            let winnnerDiv = document.querySelector("#winnerDiv");
            winnnerDiv.style.display = "flex"
            let winnerHeader = document.querySelector("#winnerDiveText");
            winnerHeader.textContent = "Player 1 wins!"
        }
        playerTurn = 1;
    }

    else if (playerTurn === 1) {
        e.target.textContent = "X";
        playerTwoScore.push(e.target.id);
        if (checkWinner(playerTwoScore)) {
            let winnnerDiv = document.querySelector("#winnerDiv");
            winnnerDiv.style.display = "flex"
            let winnerHeader = document.querySelector("#winnerDiveText");
            winnerHeader.textContent = "Player 2 wins!"
        }
        playerTurn = 0;
    }
}

function checkWinner(playerScore) {

    let mergedArray = playerOneScore + playerTwoScore;

    if ((playerScore.includes("1") && playerScore.includes("2") && playerScore.includes("3")) ||
        (playerScore.includes("1") && playerScore.includes("4") && playerScore.includes("7")) ||
        (playerScore.includes("1") && playerScore.includes("5") && playerScore.includes("9")) ||
        (playerScore.includes("4") && playerScore.includes("5") && playerScore.includes("6")) ||
        (playerScore.includes("7") && playerScore.includes("8") && playerScore.includes("9")) ||
        (playerScore.includes("2") && playerScore.includes("5") && playerScore.includes("8")) ||
        (playerScore.includes("3") && playerScore.includes("6") && playerScore.includes("9")) ||
        (playerScore.includes("3") && playerScore.includes("5") && playerScore.includes("7")))
        return true;
    
    else if(mergedArray.includes("1") && mergedArray.includes("2") && mergedArray.includes("3") && 
    mergedArray.includes("4") && mergedArray.includes("5") && mergedArray.includes("6") &&
    mergedArray.includes("7") && mergedArray.includes("8") && mergedArray.includes("9"))
    {
        let winnnerDiv = document.querySelector("#winnerDiv");
        winnnerDiv.style.display = "flex"
        let winnerHeader = document.querySelector("#winnerDiveText");
        winnerHeader.textContent = "Draw!"
    }
    else return false;

}

function playAgain() {
    let winnnerDiv = document.querySelector("#winnerDiv");
    winnnerDiv.style.display = "none"

    let buttons = document.querySelectorAll(".tictactoebuttons");

    buttons.forEach((e) => { e.textContent = "" });


    playerTurn = 0;
    playerOneScore = [];
    playerTwoScore = [];

}

initiategame();