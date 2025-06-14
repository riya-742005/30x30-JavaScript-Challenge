  // Replace with your OpenWeatherMap API key

// script.js
const apiKey = '984820acd09232251f509528bd0a3c7d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationEl = document.getElementById('location');
const tempEl = document.getElementById('temperature');
const descEl = document.getElementById('description');

searchButton.addEventListener('click', () => {
  console.log('Button clicked');
  const city = locationInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  try {
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message || 'Fetch failed');

    locationEl.textContent = data.name;
    tempEl.textContent = `${Math.round(data.main.temp)}°C`;
    descEl.textContent = data.weather[0].description;
  } catch (err) {
    console.error('Fetch error:', err);
    locationEl.textContent = 'Error';
    tempEl.textContent = '';
    descEl.textContent = err.message;
  }
}
