// initialize count / listen for clicks / add / change count

// let count = 0;
// let saveEl = document.getElementById("save-el");

// function add() {
//   count = count + 1;
//   console.log(count);
//   document.getElementById("count-el").innerText = count;
// }

// function save() {
//   let entries = count + "-";
//   saveEl.innerText += entries;

//   count = 0;
//   document.getElementById("count-el").innerText = count;

//   console.log(count);
// }

// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;

// function Add() {
//   let total = num1 + num2;
//   console.log(total);

//   document.getElementById("sum-el").textContent = total;
// }

// function Sub() {
//   let total = num1 - num2;
//   console.log(total);
//   document.getElementById("sum-el").textContent = total;
// }

// function Multiply() {
//   let total = num1 * num2;
//   console.log(total);
//   document.getElementById("sum-el").textContent = total;
// }

// function Divide() {
//   let total = num1 / num2;
//   console.log(total);
//   document.getElementById("sum-el").textContent = total;
// }

let homeScore = 0;
let guestScore = 0;

function addOne() {
  homeScore += 1;
  console.log(homeScore);
  document.getElementById("home-score").innerText = homeScore;
}

function addTwo() {
  homeScore += 2;
  console.log(homeScore);
  document.getElementById("home-score").innerText = homeScore;
}

function addThree() {
  homeScore += 3;
  console.log(homeScore);
  document.getElementById("home-score").innerText = homeScore;
}

function addOneGuest() {
  guestScore += 1;
  console.log(guestScore);
  document.getElementById("guest-score").innerText = guestScore;
}

function addTwoGuest() {
  guestScore += 2;
  console.log(guestScore);
  document.getElementById("guest-score").innerText = guestScore;
}

function addThreeGuest() {
  guestScore += 3;
  console.log(guestScore);
  document.getElementById("guest-score").innerText = guestScore;
}

function playAgain() {
  homeScore = 0;
  guestScore = 0;
  document.getElementById("home-score").innerText = homeScore;

  document.getElementById("guest-score").innerText = guestScore;
}
