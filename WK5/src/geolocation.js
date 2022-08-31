navigator.geolocation.getCurrentPosition(showPosition);
function showPosition(position) {
  console.log(position.coords.longitude);
  console.log(position.coords.latitude);
}
let lat = position.coords.latitude;
let long = position.coords.longitude;
let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let units = "metric";
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`;
axios.get(url).then(showTemperature);
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let message = `It is ${temperature} degrees in Sydney`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

function showWeather(response) {
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
}

function retrievePosition(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(retrievePosition);
