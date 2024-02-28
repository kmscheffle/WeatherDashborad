var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={ad8c7b7abe82b89cf4e233509a776c09}';
const apiKey = 'ad8c7b7abe82b89cf4e233509a776c09';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const weatherDisplay = document.getElementById('weatherDisplay');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    getWeatherData(city);
});

function getWeatherData(city) {
    fetch(`${apiUrl}?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherDisplay.textContent = 'Failed to fetch weather data. Please try again.';
        });
}

function displayWeather(data) {
    // Update the DOM with weather data
     weatherDisplay.textContent = `Temperature: ${data.main.temp}°C`;
}