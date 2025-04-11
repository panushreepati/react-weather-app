import React from 'react';
import './Forecast.css';

const Forecast = ({ forecastData }) => {
  if (!forecastData || forecastData.length === 0) return null;

  const getDay = (dt) => {
    return new Date(dt * 1000).toLocaleDateString('en-US', {
      weekday: 'short',
    });
  };

  return (
    <div className="forecast-grid">
      {forecastData.map((day, index) => (
        <div key={index} className="forecast-card">
          <h4>{getDay(day.dt)}</h4>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt={day.weather[0].description}
          />
          <p>{Math.round(day.temp.day)}°C</p>
          <small>{day.weather[0].main}</small>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
