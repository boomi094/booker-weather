function getWeather() {

  const city = document.getElementById('cityInput').value.trim();

  if (city === "") {

    document.getElementById('weatherResult').innerHTML = `<p>Please enter a city name!</p>`;

    return;

  }

  const apiKey = '698d6a46c8da7ed3927c33c8caa60076';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)

    .then(response => {

      if (!response.ok) {

        throw new Error("City not found, check spelling!");

      }

      return response.json();

    })

    .then(data => {

      const weather = `

        <h2>${data.name}, ${data.sys.country}</h2>

        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>

        <p><strong>Weather:</strong> ${data.weather[0].description}</p>

        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon" />

      `;

      document.getElementById('weatherResult').innerHTML = weather;

    })

    .catch(error => {

      document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;

    });

}