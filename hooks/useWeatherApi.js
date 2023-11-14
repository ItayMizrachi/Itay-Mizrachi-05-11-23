import { useState } from "react";
import axios from "axios";

const useWeatherApi = () => {
  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();
  const [hourlyData, setHourlyData] = useState();
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [error, setError] = useState(null); // Add error state

  const fetchCity = async (city) => {
    try {
      setLoadingWeather(true)
      const response = await axios.get(
        `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${import.meta.env.VITE_APIKEY3}&q=${city}`
      );
      setLoadingWeather(false);
      return response.data;
    } catch (error) {
      setLoadingWeather(false);
      setError(error); 
      throw error;
    }
  };

  const fetchWeatherData = async (cityKey) => {
    try {
      setLoadingWeather(true); // Set loadingWeather to true
      const response = await axios.get(
        `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${import.meta.env.VITE_APIKEY3}`
      );
      setCurrentWeather(response.data[0]);
    } catch (error) {
      setError(error); 
      throw error;
    } finally {
      setLoadingWeather(false); // Set loadingWeather back to false
    }
  };

  const fetchForecast = async (cityKey) => {
    try {
      const response = await axios.get(
        `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${import.meta.env.VITE_APIKEY3}`
      );
      setForecast(response.data);
    } catch (error) {
      setError(error); 
      throw error;
    }
  };

  const fetchHourlyData = async (cityKey) => {
    try {
      const response = await axios.get(
        `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${import.meta.env.VITE_APIKEY3}`
      );
      setHourlyData(response.data);
    } catch (error) {
      setError(error); 
      throw error;
    }
  };

  return {
    fetchCity,
    fetchWeatherData,
    fetchForecast,
    fetchHourlyData,
    currentWeather,
    forecast,
    hourlyData,
    loadingWeather,
    error, 
  };
};

export default useWeatherApi;