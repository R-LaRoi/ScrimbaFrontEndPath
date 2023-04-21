const btn = document.querySelector("button").addEventListener("click", getIdea);
const showIdeaHtml = document.querySelector("h3");

function getIdea() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      showIdeaHtml.innerHTML = `<div class='suggest'>${data.activity}<div>`;
    });
}
