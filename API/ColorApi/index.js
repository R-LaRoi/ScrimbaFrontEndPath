document.getElementById("color-section");

function getColors() {
  let colorInput = document.getElementById("color-input").value;
  console.log(colorInput);
}

document.getElementById("get-color").addEventListener("click", getColors);
