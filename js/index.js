let now = new Date();
let weekDay = now.getDay();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDate = document.querySelector("#weekdayHour");
currentDate.innerHTML = `${weekdays[weekDay]}, ${hours}:${minutes}`;

function displayWeather(response) {
  document.querySelector("h2").innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  document.querySelector("#temperature").innerHTML = `${temperature}`;
}

function search(city) {
  let key = "3b2c6af1778711e6c3af06800ecbd9b8";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  axios.get(url).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#cityToSearch").value;
  search(city);
}

let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);

// function displayWeather(response) {
//   let temperature = Math.round(response.data.main.temp);
//   let temperatureCelsius = document.querySelector("#temperature");
//   temperatureCelsius.innerHTML = `${temperature}`;
//}

function getLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let heading = document.querySelector("h2");
  let city = position.name;
  heading.innerHTML = `${city}`;
  let apiKey = "3b2c6af1778711e6c3af06800ecbd9b8";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayWeather);
}

function displayPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getLocation);
}

let button = document.querySelector("#currentLocation");
button.addEventListener("click", displayPosition);

search("Sao Paulo");

// function temperatureCelsius(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = "24";
// }

// let celsius = document.querySelector("#celsius");
// celsius.addEventListener("click", temperatureCelsius);

// function temperatureFarenheit(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   let temperature = temperatureElement.innerHTML;
//   temperature = Number(temperature);
//   temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
// }

// let farenheit = document.querySelector("#farenheit");
// farenheit.addEventListener("click", temperatureFarenheit);

//function showComment(response) {
//  console.log(response);
//  console.log(response.data[0].email);
//}

//let url = "https://jsonplaceholder.typicode.com/comments";
//axios.get(url).then(showComment);
