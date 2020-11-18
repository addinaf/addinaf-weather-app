// DATE FUNCTION
let dateElement = document.querySelector("#date");
let currentDay = new Date();
let date = currentDay.getDate();
let month = currentDay.getMonth();
let monthIndex = currentDay.getMonth();
let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

let dayIndex = currentDay.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let year = currentDay.getFullYear();

dateElement.innerHTML = `${days[dayIndex]} ${date} ${months[monthIndex]} ${year}`;

let timeElement = document.querySelector("#time");
let hours = currentDay.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentDay.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

timeElement.innerHTML = `${hours}:${minutes}`;

// LOCATION FUNCTION
function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name.toUpperCase();
  document.querySelector("#city-small").innerHTML = response.data.name;
  let mainTemperature = Math.round(response.data.main.temp);
  document.querySelector(
    "#main-temperature"
  ).innerHTML = `${mainTemperature}`;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#real-feel").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#max-temp").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#min-temp").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#situation").innerHTML = response.data.weather[0].main.toUpperCase();
}

function handleSubmit(event) {
  event.preventDefault();
  let units = "metric";
  let cityInput = document.querySelector("#city-input").value;
  // let apiKey = "228eba262b4ca88b9a34ddd2463378be";
  // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  // axios.get(apiUrl).then(displayWeather);
  searchCity(cityInput);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

function searchCity(city) {
  let units = "metric";
  let apiKey = "228eba262b4ca88b9a34ddd2463378be";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}

searchCity("Milan");
