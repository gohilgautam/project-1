document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector("#search");
    const inputField = document.getElementById("cityName");

    searchIcon.addEventListener("click", fetchWeather);

    function fetchWeather() {
        const apiKey = "a854c2f8b7f6eb5b6ee4b8592b5e9515";
        const city = inputField.value.trim();

        if (city === "") {
            alert("Please enter a city name.");
            return;
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === "404") {
                    alert("City not found");
                    return;
                }

                displayWeather(data);
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
            });
    }

    function displayWeather(data) {
        const weatherContainer = document.getElementById("weatherInfo");
        weatherContainer.innerHTML = `<div class="weather-card">
                <h2>${data.name}, ${data.sys.country}</h2>
                <h3>${data.weather[0].description}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            </div>`;
    }
});
