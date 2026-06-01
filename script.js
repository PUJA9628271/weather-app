async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const weatherResult = document.getElementById("weatherResult");

    if (city === "") {
        weatherResult.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const apiKey = 
        "PASTE_YOUR_COPIED_KEY_HERE";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            weatherResult.innerHTML = "<p>City not found.</p>";
            return;
        }

        weatherResult.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp}°C</p>
            <p>☁
