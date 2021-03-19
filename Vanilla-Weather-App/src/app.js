

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
celsiusTemp = response.data.main.temp;
    
temperatureElement.innerHTML = Math.round(celsiusTemp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

function changeCity(event) {
    event.preventDefault();
    let apiKey = "98ba3df7ef91e3454412bee7a0392f55";
    let city = document.querySelector("#city-name").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
}
let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", changeCity);
