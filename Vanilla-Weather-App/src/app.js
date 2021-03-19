function formatDate(timestamp) {
    let date = new Date(timestamp);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let hour = date.getHours();
if (hour < 10) {
    hour = `0${hour}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}
return `${day} ${hour}:${minutes}`;

}

function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temp");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");
celsiusTemp = response.data.main.temp;
    
temperatureElement.innerHTML = Math.round(celsiusTemp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = formatDate(response.data.dt * 1000);
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);

}

function showFtemperature(event) {
    event.preventDefault();
    fahrenheitLink.classList.add("active");
    celsiusLink.classList.remove("active");
    let temperatureElement = document.querySelector("#temp");
    temperatureElement.innerHTML = Math.round((celsiusTemp * 9) / 5 + 32);
}

function showCtemperature(event) {
    event.preventDefault();
    fahrenheitLink.classList.remove("active");
    celsiusLink.classList.add("active");
    let temperatureElement = document.querySelector("#temp");
    temperatureElement.innerHTML = Math.round(celsiusTemp);
}

function changeCity(event) {
    event.preventDefault();
    let apiKey = "98ba3df7ef91e3454412bee7a0392f55";
    let city = document.querySelector("#city-name").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
}

let celsiusTemp = null;

let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", changeCity);

let fahrenheitLink = document.querySelector("#degree-F");
fahrenheitLink.addEventListener("click", showFtemperature);

let celsiusLink = document.querySelector("#degree-C");
celsiusLink.addEventListener("click", showCtemperature);
