const form = document.querySelector("form");

addEventListener("submit", function (event) {
  event.preventDefault;
  const form1 = new FormData(form);
  console.log(form1);
  let names = form1.get("name");
  console.log(names);
});
