const apiKey = 'your-api-key-here'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert("City not found!");
                return;
            }
            updateWeatherInfo(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function updateWeatherInfo(data) {
    const cityName = document.getElementById("city-name");
    const temp = document.getElementById("temp");
    const desc = document.getElementById("desc");
    const humidity = document.getElementById("humidity");

    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temp.textContent = `Temperature: ${data.main.temp}°C`;
    desc.textContent = `Description: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
}
