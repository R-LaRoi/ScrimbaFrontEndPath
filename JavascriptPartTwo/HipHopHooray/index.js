const artist = [
  {
    name: "Queen Latifah",
    avatar: "./images/queen.jpg",
    quote: "Ladies First",
    album: "All Hail the Queen",
    isPaused: false,
    isSkipped: false,
  },
  {
    name: "Tupac Shakur",
    avatar: "./images/tupac.webp",
    quote:
      "“I am not a perfectionist, but still I seek perfection. I am not a great romantic, but yet I yearn for affection.”",
    album: "2Pacalypse Now",
    isPaused: false,
    isSkipped: false,
  },
  {
    name: "DMX",
    avatar: "./images/dmx.jpg",
    quote: "Where my dogs at!",
    album: "It's dark and hell is hot",
    isPaused: false,
    isSkipped: false,
  },
];

function showArtistHTML() {
  renderArtist = document.getElementById("profile");

  artist.map((art) => {
    console.log(art.album);

    renderArtist.innerHTML = `
    <div> <img src =${art.avatar} class="photo"></div>
    <div class='text-overlay'>
    <div class="name"> ${art.name}</div>
    <div> ${art.album}</div>
    <div> ${art.quote}</div>
    </div>`;
  });
}

showArtistHTML();

// function ShowArtist() {
//   Object.assign(this, data);
//   this.ShowArtistHtml = function () {
//     const { name, quote, album, avatar } = this;

//     return `
//         <img src=${avatar} class="photo" />
//         <div>${name}</div>
//         <div>${quote}</div>
//         <div>${album}</div>

// `;
//   };
// }

document
  .getElementById("skip-btn")
  .addEventListener("click", showBadgeUnderrated);
document
  .getElementById("pause-btn")
  .addEventListener("click", showBadgeClassic);

function showBadgeUnderrated() {
  const text = document.getElementById("rating");
  text.innerHTML = `<div class ="underrated">underrated</div>`;
  console.log(text);
}
function showBadgeClassic() {
  const text = document.getElementById("rating");
  const text2 = document.getElementById("rating-two");
  text2.innerHTML = `<div class="classic">classic</div>`;
  console.log(text);
}
