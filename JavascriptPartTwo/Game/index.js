let wizard = {
  elementId: "hero",
  name: "wizard",
  avatar: "images/wizard.png",
  health: 60,
  dice: 6,
};

// object destructuring
let monster = {
  elementId: "monster",
  name: "monster",
  avatar: "images/monster.png",
  health: 28,
  dice: 3,
};

let { elementId, name, avatar, health, dice } = monster;

// object destructuring

function renderCharacter(data) {
  return (document.getElementById(
    data.elementId
  ).innerHTML = ` <div class="character-card">
      <h4 >${data.name}</h4>

      <img  ${data.avatar}/>
      <p class="health">
        health: <b>${data.health}  </b>
      </p>
      <div class="dice-container">
        <div class="dice">${data.dice} </div>
      </div>
    </div>

`);
}

renderCharacter(wizard);

priceListCents = [1400, 1500, 1600];

let newPrice = priceListCents.map((price) => {
  console.log(price);
});

// const DeclareVariableHere = object.map((object) => {
//   return object;
// });

const newShoes = new Array(25).fill("👢");

console.log(newShoes);

function getDiceRollArray(diceCount) {
  let newDiceRolls = new Array(diceCount).fill("0");

  newDiceRolls.map(function () {
    return Math.floor(Math.random() * 6) + 1;
  });
}

// getDiceRollArray().fill();

new Array();

//  constructor functions

// function Brand() {
//   this.brand = "APC";
//   this.item = "jacket";
//   this.color = "red";
// }

// const brand1 = new Brand();

// console.log(brand1);




// constructor functions  hotel
function NationalParkHotels(data) {
  this.name = data.name;
  this.rooms = data.rooms;
  this.stars = data.stars;
  this.cost = data.costPerNight;
}

const safariView = new NationalParkHotels(hotel1);

NationalParkHotels(hotel1);

console.log(safariView);
