function getWeather() {
    const location = document.getElementById('locationInput').value;

    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiKey = 'a67ab0424e6e180d335be1f3634bd1aa';
    const encodedLocation = encodeURIComponent(location); // Encode user input

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodedLocation},in&appid=${apiKey}&units=metric`;
    // Add ',in' to specify India as the country code

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          const weatherInfo = document.getElementById('weatherInfo');
          const { name, main, weather } = data;
          const temperature = main.temp;
          const description = weather[0].description;
          const icon = weather[0].icon;

          weatherInfo.innerHTML = `
            <h2>${name}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Weather: ${description}</p>
            <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
          `;
        } else {
          document.getElementById('weatherInfo').innerText = 'Location not found';
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
}
