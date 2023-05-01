fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=space"
)
  .then((response) => response.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.getElementById(
      "img-credit"
    ).innerText = `Photographer: ${data.user.name}`;
  });

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.image.thumb);
    document.getElementById("crypto").innerHTML = `<div class='coins'>
    <img src="${data.image.thumb}"> <div>${data.name}</div></div>
    `;
    document.getElementById("c-list").innerHTML = `
    <li>$${data.market_data.current_price.usd}</li>
    <li>High:${data.market_data.high_24h.usd}</li>
    <li>Low:${data.market_data.low_24h.usd}</li>`;
  });

function currentTime() {
  const getTime = new Date();
  // let clock = getTime.getHours() + ":" + getTime.getMinutes();
  let clock = getTime.toLocaleTimeString("en-us", { timeStyle: "short" });
  document.getElementById("time-js").innerText = clock;
}
setInterval(currentTime, 1000);

let apiKey = "a43564c91a6c605aeb564c9ed02e3858";

navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`
  ).then((response) =>
    response.json().then((data) => {
      console.log(data);
      let iconUrl = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;

      document.getElementById("temp").innerHTML = ` 
      
      <img src ="${iconUrl}"></img>${Math.round(data.current.temp)}°
 <div>${data.timezone}</div>`;
    })
  );
});

// .catch((err) => {
//   document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1598722401442-9e51a6828da8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2587&q=80)`;

//   // report the error to an error log
// });
