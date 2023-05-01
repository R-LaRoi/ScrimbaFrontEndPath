document.getElementById("color-scheme").addEventListener("click", getColor);

function getColor() {
  const hex = document.getElementById("pick-color").value.slice(1);
  const mode = document.getElementById("mode").value;

  fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&${mode}`)
    .then((response) => response.json())
    .then(
      (data) =>
        (document.getElementById(
          "show-color"
        ).innerHTML = `<img class="scheme" src="${data.image.named}" >`)
    );
}
