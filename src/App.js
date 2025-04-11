import React, { useState } from 'react';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { fetchCurrentWeather, fetchForecast } from './services/weatherService';
import './styles/App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  const handleSearch = async (input) => {
    try {
      const data =
        typeof input === 'string'
          ? await fetchCurrentWeather(input)
          : await fetchCurrentWeather(null, input.lat, input.lon);

      setWeatherData(data);

      if (data && data.coord) {
        const forecast = await fetchForecast(data.coord.lat, data.coord.lon);
        setForecastData(forecast);
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Weather App</h1>
      <Search onSearch={handleSearch} />
      {weatherData && <CurrentWeather data={weatherData} />}
      {forecastData.length > 0 && <Forecast forecastData={forecastData} />}
    </div>
  );
}

export default App;
