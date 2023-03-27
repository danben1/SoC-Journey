console.log("rock paper scissors")
// plan for rps game 
//prompt user to choose rock/paper/or scissors
//store user choice as a variable
//computer generates random selection
//store computer choice as variable
//compare user choice vs computer choice
    //apply following rule set 
    //rock beats scissors 
    //scissors beats paper
    //paper beats rock
//if user win update score
//if computer win update scores
//show scores and prompt user to play again 

//let playerMove = "paper";
//let computerMove = "rock";

//if player = rock and computer = scissors, player wins
//if player = rock and computer = paper, player loses
//if player = rock and computer = rock, draw

//logic for player choose rock
/*if (playerMove === "rock") {
    if (computerMove === "scissors"){
        console.log("you won");
    } else if (computerMove === "paper"){
        console.log("you lost");
    } else {
        console.log("DRAW"); 
    }
}

//logic for player choose scissors
if (playerMove === "scissors") {
    if (computerMove === "paper"){
        console.log("you won");
    } else if (computerMove === "rock"){
        console.log("you lost");
    } else {
        console.log("DRAW"); 
    }
}

//logic for player choose paper
if (playerMove === "paper") {
    if (computerMove === "rock"){
        console.log("you won");
    } else if (computerMove === "scissors"){
        console.log("you lost");
    } else {
        console.log("DRAW"); 
    }
}*/

//Task 2
//create a function that returns winner of rps between two players
//take input of player1 and player2 (which have option of rock, paper, or scissors)
//run if statements to determine winner
//return:
    //1 if player1 wins
    //0 if it is a draw
    //-1 if player 2 wins

/*function getWinner(player1, computerMove) {    
    if (player1 === "rock") {
        if (computerMove === "scissors"){
            return 1;
        } else if (computerMove === "paper"){
            return -1;
        } else { 
            return 0;
        }
    }
    if (player1 === "scissors") {
        if (computerMove === "paper"){
             return 1;
        } else if (computerMove === "rock"){
             return -1;
        } else {
            return 0;
        }
    }
    if (player1 === "paper") {
        if (computerMove === "rock"){
            return 1;
        } else if (computerMove === "scissors"){
            return -1;
        } else { 
            return 0;
        }
    }
}
      
let result = getWinner("paper", "rock");*/

//Task 3
//get user-inputted value for playerMove 
//call function getWinner with that value as player1
//call function getWinner and hardcode player2/computerMove
//display result using alert

/* let player1 = prompt("enter rock, paper or scissors");
let computerMove = "rock"

function getWinner(player1, computerMove) {    
    if (player1 === "rock") {
        if (computerMove === "scissors"){
            return 1;
        } else if (computerMove === "paper"){
            return -1;
        } else { 
            return 0;
        }
    }
    if (player1 === "scissors") {
        if (computerMove === "paper"){
             return 1;
        } else if (computerMove === "rock"){
             return -1;
        } else {
            return 0;
        }
    }
    if (player1 === "paper") {
        if (computerMove === "rock"){
            return 1;
        } else if (computerMove === "scissors"){
            return -1;
        } else { 
            return 0;
        }
    }
}
      
let result = getWinner(player1, "rock");
alert(result)
*/
// task 4
// write a function
// mathrandom to auto generate 1, 2, 3
// assign values to 1-3 with rock, paper, scissors
// return value into player2 
// display the result in an alert

//let userMove = prompt("enter rock, paper or scissors");
//let computerMove = "rock"
//let player2 = 0;

//create an array to store potential answers

userOptions = ["rock", "paper", "scissors"];

//create an object to convert user entry as a string to an index value 

gameOptions = {
    1: "rock",
    2: "paper",
    3: "scissors"
}


function getRandom () {
    let randomNumber = Math.floor(Math.random() * userOptions.length);
    let player2 = 0;
    if (randomNumber === 0 ){
        player2 = userOptions[randomNumber];
        return player2; 
    } else if (randomNumber === 1) {
        player2 = userOptions[randomNumber];
        return player2;
    } else {
        player2 = userOptions[randomNumber];
        return player2;
    }
}

//let computerMove = getRandom(); 

function getWinner(player1, player2) {    
    if (player1 === "rock") {
        if (player2 === "scissors"){
            return 1;
        } else if (player2 === "paper"){
            return -1;
        } else { 
            return 0;
        }
    }
    if (player1 === "scissors") {
        if (player2 === "paper"){
             return 1;
        } else if (player2 === "rock"){
             return -1;
        } else {
            return 0;
        }
    }
    if (player1 === "paper") {
        if (player2 === "rock"){
            return 1;
        } else if (player2 === "scissors"){
            return -1;
        } else { 
            return 0;
        }
    }
}

function score (result) {
    if (result === -1) {
        lose++
    } else if (result === 0) {
        draw++ 
    } else {
        win++
    }
    return [win, lose, draw]
}
//let result = getWinner(userMove, computerMove);
//alert(result)

//Task 5
//Create a while loop to restart the game
//conirm

let playerName = prompt ('Enter your name - Max 10 characters');

while (!/^[A-Z][a-zA-Z]{0,9}$/.test(playerName)) {
    playerName = prompt (`Try again - Please enter only enter 10 characters`)
}

alert ("you're in!")


let replay = true;
let gamesPlayed = 0;
let win = 0;
let lose = 0;
let draw = 0;

while (replay === true) {
    let userMove = prompt("enter rock, paper or scissors");
    let computerMove = getRandom(); 
    let result = getWinner(userMove, computerMove);
    let statistics = score (result);
    gamesPlayed ++
    alert(
    `You have played ${gamesPlayed} games!
    You've won: ${statistics[0]} times! 
    You've lost: ${statistics[1]} times! 
    You've drew ${statistics[2]} times!`)
    replay = confirm ("Do you want to play again?");
}

// Task 6
// display a) how many games have been played, b) how many number of wins, loses, draws
// This information needs to be displayed at the end of each round


// Task 7
// Prompt username at the beginniing of the game
// if username less than 10 characters, accept the input, if exceeding 10, alert decline and reprompt 
// Return player name in the statistics
