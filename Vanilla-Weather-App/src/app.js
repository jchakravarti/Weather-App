function showFtemp() {
let selectF = document.querySelector(".temp");
selectF.innerHTML = "45"
}
let fahrenheitButton = document.querySelector("#degree-F");
fahrenheitButton.addEventListener("click", showFtemp);


function showCtemp() {
   let selectC = document.querySelector(".temp");
selectC.innerHTML = "7" 
}
let celciusButton = document.querySelector("#degree-C");
celciusButton.addEventListener("click", showCtemp);


function displayTemperature(response) {
document.querySelector("h1").innerHTML = response.data.name;
document.querySelector(".temp").innerHTML = Math.round(response.data.main.temp);
document.querySelector("h3").innerHTML = response.data.weather[0].main;
document.querySelector("#humidity").innerHTML = response.data.main.humidity;
document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
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