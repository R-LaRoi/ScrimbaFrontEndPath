let deckId;

document.getElementById("draw-card").addEventListener("click", () => {
  handleClick;
});

function handleClick() {
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then((res) => res.json())
    .then((data) => console.log(data));
  document.getElementById("cards").innerHTML = `
                <img src=${data.cards[0].image} class="card" />
                <img src=${data.cards[1].image} class="card" />
            `;
}
