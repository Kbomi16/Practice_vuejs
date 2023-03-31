function showWeather(cityName, apiKey) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const feelsLike = data.main.feels_like;
      const humidity = data.main.humidity;
      
      // DOM 요소 선택
      const cityEl = document.querySelector('#city');
      const weatherEl = document.querySelector('#weather-description');
      const temperatureEl = document.querySelector('#temperature');
      const feelsLikeEl = document.querySelector('#feels-like');
      const humidityEl = document.querySelector('#humidity');

      // DOM 요소에 데이터 삽입
      cityEl.textContent = cityName;
      weatherEl.textContent = weatherDescription;
      temperatureEl.textContent = `${temperature}°C`;
      feelsLikeEl.textContent = `체감 온도 ${feelsLike}°C`;
      humidityEl.textContent = `습도 ${humidity}%`;
    })
    .catch(error => {
      console.log(error);
    });
}

const searchBtn = document.querySelector('#search-btn');
const cityInput = document.querySelector('#city-input');
const apiKey = '2a0a0f9dc78da1a573eacc216d3d5443';

searchBtn.addEventListener('click', () => {
  const cityName = cityInput.value;
  showWeather(cityName, apiKey);
});
