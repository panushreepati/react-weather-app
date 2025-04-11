import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  return (
    <div className="weather-card">
      <div className="main-info">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt={data.weather[0].description}
        />
        <h2>{Math.round(data.main.temp)}°C</h2>
        <h3>{data.weather[0].main}</h3>
        <h4>{data.name}</h4>
      </div>
      <div className="extra-info">
        <p>💧 Humidity: {data.main.humidity}%</p>
        <p>🌬 Wind: {data.wind.speed} km/h</p>
        <p>🌧 Rain: {data.rain ? data.rain['1h'] : 0} mm</p>
      </div>
    </div>
  );
};

export default CurrentWeather;

