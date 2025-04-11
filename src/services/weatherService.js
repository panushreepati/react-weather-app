import axios from 'axios';

const API_KEY = 'd5f149a0fb5af381d9f67c998e2ed7f2';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = async (city, lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: city
        ? { q: city, units: 'metric', appid: API_KEY }
        : { lat, lon, units: 'metric', appid: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    return null;
  }
};

export const fetchForecast = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/onecall`, {
      params: {
        lat,
        lon,
        exclude: 'minutely,hourly,alerts',
        units: 'metric',
        appid: API_KEY,
      },
    });
    return response.data.daily.slice(0, 7);
  } catch (error) {
    console.error('Error fetching forecast:', error);
    return [];
  }
};



