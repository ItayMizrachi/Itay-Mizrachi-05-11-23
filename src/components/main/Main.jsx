import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCityData } from "../../features/cities/citySlice";
import Forecast from "./Forecast";
import Now from "./Now";
import LaterToday from "./LaterToday";
import useWeatherApi from "../../../hooks/useWeatherApi";
import Map from "./Map";
import CityNotFound from "./CityNotFound";
import ErrorMessage from "./ErrorMessage";
import ForecastSkeleton from "../skeletons/ForecastSkeleton";
import LaterTodaySkeleton from "../skeletons/LaterTodaySkeleton";
import MapSkeleton from "../skeletons/MapSkeleton";

const Main = () => {
  let cityData = useSelector(selectCityData);
  const [fetchedKey, setFetchedKey] = useState(null);

  // Ensure cityData is always an array
  if (!Array.isArray(cityData)) {
    cityData = [cityData];
  }

  const {
    fetchWeatherData,
    fetchForecast,
    fetchHourlyData,
    currentWeather,
    forecast,
    hourlyData,
    loadingWeather,
    error,
  } = useWeatherApi();

  useEffect(() => {
    const cityKey = cityData?.[0]?.Key;
    if (cityKey && cityKey !== fetchedKey) {
      fetchWeatherData(cityKey);
      fetchForecast(cityKey);
      fetchHourlyData(cityKey);
      setFetchedKey(cityKey);
    }
  }, [cityData]);

  if (error) {
    return <ErrorMessage />;
  }

  if (loadingWeather && (!cityData || cityData.length === 0)) {
    return <CityNotFound />;
  }
  return (
    <main className="grid grid-cols-1 lg:grid-cols-10 my-8">
      <section className="col-span-full lg:col-span-3 ">
        <Now currentWeather={currentWeather} loadingWeather={loadingWeather} />
        <h2 className="font-semibold text-xl ml-2 my-4">5 Days Forecast</h2>
        <div className="bg-base-200 rounded-xl shadow-md border border-base-300">
          {loadingWeather ? (
            Array.from({ length: 5 }).map((_, index) => <ForecastSkeleton key={index} />)
          ) : (
            forecast?.DailyForecasts.map((day, index) => (
              <Forecast key={index} day={day} index={index} />
            ))
          )}
        </div>
      </section>
      <section className="col-span-full lg:col-span-7 lg:ml-8 mt-8 lg:mt-0">
        {loadingWeather ? <MapSkeleton /> :  <Map />}
        {loadingWeather ? <LaterTodaySkeleton /> : <LaterToday hourlyData={hourlyData} />}
      </section>
    </main>
  );
};

export default Main;