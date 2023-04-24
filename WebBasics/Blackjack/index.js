let sum = 0;
let cards = [];
let message = "";
let isPlaying = false;
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let playMessage = document.getElementById("play-message");
let sumDisplay = document.querySelector("#display-sum");
let showCards = document.querySelector("#show-cards");
let hasBlackjack = false;

let playerInfo = {
  playerName: "Wandile",
  chips: "$2700",
};

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 12) + 1;
  if (randomNumber > 10) {
    return 7;
  } else if (randomNumber === 1) {
    return 11;
  } else return randomNumber;
}

function newGame() {
  sum = firstCard + secondCard;
  isPlaying = true;
  showCards.innerText = firstCard + " " + secondCard;
  sumDisplay.innerText = firstCard + secondCard;
  playGame();
}

function playGame() {
  for (i = 0; i < cards.length; i++) {
    showCards.textContent += cards[i] + " ";
  }

  sumDisplay.textContent = "Sum:" + sum;
  if (sum <= 20) {
    message = "Would you like to draw a new card?";
  } else if (sum === 21) {
    message = "You are a Blackjack Winner!";
    hasBlackjack = true;
  } else if (sum > 21) {
    message = "You are out of the game!";
    isPlaying = false;
  }

  playMessage.innerText = message;
}

function drawCard() {
  if (isPlaying === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    playGame();
  }
}

let player = document.querySelector("#player-info");
player.innerText = playerInfo.playerName + ": " + playerInfo.chips;

// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// // Create a function that puts the apples onto the appleShelf
// // and the oranges onto the orangeShelf. Use a for loop,
// // a conditional statement, and the textContent property.

// // for (i = 0; i < fruits.length; i++)

//   function storefruit(){
//     for (i = 0; i < fruit.length; i++) {
//     if (fruit[i] === "🍎" ){
//         appleShelf.innerText += "🍎"
//     } else if (fruit[i] === "🍊") {
//       appleShelf.innerText += "🍎";
//     }

// }}

/// chaining together .filter() and  .map() /

// const voters = [
//   { name: "Joe", email: "joe@joe.com", voted: true },
//   { name: "Jane", email: "jane@jane.com", voted: true },
//   { name: "Bo", email: "bo@bo.com", voted: false },
//   { name: "Bane", email: "bane@bane.com", voted: false },
// ];

// const hasVoted = voters
//   .filter((vote) => vote.voted)
//   .map((email) => {
//     console.log(email.email);
//   });
