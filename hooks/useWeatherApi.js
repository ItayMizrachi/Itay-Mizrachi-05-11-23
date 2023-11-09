import { useState } from "react";
import axios from "axios";

const useWeatherApi = () => {
  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();
  const [hourlyData, setHourlyData] = useState();

  const fetchCity = async (city) => {
    try {
      const response = await axios.get(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${import.meta.env.VITE_APIKEY3}&q=${city}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const fetchWeatherData = async (cityKey) => {
    try {
      const response = await axios.get(
        `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${import.meta.env.VITE_APIKEY3}`
      );
      setCurrentWeather(response.data[0]);
    } catch (error) {
      throw error;
    }
  };

  const fetchForecast = async (cityKey) => {
    try {
      const response = await axios.get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${import.meta.env.VITE_APIKEY3}`
      );
      setForecast(response.data);
    } catch (error) {
      throw error;
    }
  };

  const fetchHourlyData = async (cityKey) => {
    try {
      const response = await axios.get(
        `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${import.meta.env.VITE_APIKEY3}`
      );
      setHourlyData(response.data);
    } catch (error) {
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
  };
};

export default useWeatherApi;
