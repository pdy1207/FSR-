const API_KEY = "발급받으신 API를 넣으시면 됩니다.";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child ");
      const city = document.querySelector("#weather span:last-child ");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
} //너의 위도와 경도를 알려줄게

function onGEoError() {
  alert("Can't find you. No weather for you.");
} //너의 위도와 경도를 모르겠어.

navigator.geolocation.getCurrentPosition(onGeoOk, onGEoError);
//위치를 알려주는함수.
