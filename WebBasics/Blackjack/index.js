let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let message = "";
let isPlaying = true;

let playMessage = document.getElementById("play-message");
console.log(playMessage);

// let sumDisplay = (document.getElementById("display-sum").textContent =
//   "sum: " + sum);

let sumDisplay = document.querySelector("#display-sum");
sumDisplay.textContent = "Sum:" + sum;

let showCards = document.querySelector("#show-cards");

// showCards.innerText = " Cards: " + firstCard + " - " + secondCard;
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else return randomNumber;
}

function newGame() {
  playGame();
}

function playGame() {
  for (i = 0; i < cards.length; i++) {
    showCards.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "You are a Blackjack Winner!";
  } else if (sum === 21) {
    message = "Would you like to draw a new card?";
  } else {
    isPlaying = false;
    message = "Draw another card.";
  }

  playMessage.innerText = message;
}

function drawCard() {
  let newCard = getRandomCard();
  sum += newCard;

  cards.push(newCard);
  console.log(cards);
  playGame();
}
