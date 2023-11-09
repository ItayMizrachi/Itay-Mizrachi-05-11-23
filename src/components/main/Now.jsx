import { useState, useEffect } from "react";
import {
  BookmarkIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { selectCityData } from "../../features/cities/citySlice";

const Now = ({ currentWeather }) => {
  const cityData = useSelector(selectCityData);
  const [isBookmarked, setIsBookmarked] = useState(false);

    // Check if the current city is in the saved cities in local storage
  useEffect(() => {
    const savedCities = JSON.parse(localStorage.getItem("cities")) || [];
    setIsBookmarked(savedCities.some((city) => city.Key === cityData[0]?.Key));
  }, [cityData]);

   // Handle bookmark click - add/remove city from saved cities in local storage
  const handleBookmarkClick = () => {
    const savedCities = JSON.parse(localStorage.getItem("cities")) || [];
    if (isBookmarked) {
      const newSavedCities = savedCities.filter(
        (city) => city.Key !== cityData[0]?.Key
      );
      localStorage.setItem("cities", JSON.stringify(newSavedCities));
    } else {
      savedCities.push({ ...cityData[0], weather: currentWeather });
      localStorage.setItem("cities", JSON.stringify(savedCities));
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="grid grid-cols-1 p-5 rounded-xl border border-base-300 bg-base-200 mt-4 shadow-xl">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-xl"> {cityData[0]?.EnglishName}</p>
      </div>
      <div className="flex justify-between border-b border-base-100 pb-3">
        <div className="mt-1">
          <p className="text-4xl font-semibold mb-2">
            {Math.round(currentWeather?.Temperature?.Metric?.Value)}°
            {currentWeather?.Temperature?.Metric?.Unit}
          </p>
          <p className="font-semibold">{currentWeather?.WeatherText}</p>
        </div>

        <div className="w-16 h-16">
          <img
            className="w-full h-full object-cover rounded-full"
            src={`http://developer.accuweather.com/sites/default/files/${
              currentWeather?.WeatherIcon < 10 ? "0" : ""
            }${currentWeather?.WeatherIcon}-s.png`}
            alt="Weather icon"
          />
        </div>
      </div>
      <div className="mt-2 space-y-2">
        <div className="flex items-center">
          <CalendarDaysIcon className="w-5 h-5 mr-2" />
          <span>
            {" "}
            {new Date(currentWeather?.LocalObservationDateTime).toLocaleDateString(
              undefined,
              {
                day: "2-digit",
                month: "2-digit",
              } 
            )} - Now
          </span>
        </div>
        <div className="flex items-center">
          <MapPinIcon className="h-5 w-5 mr-2 text-red-500 " />
          <span>
            {cityData[0]?.EnglishName}, {cityData[0]?.Country.EnglishName}
          </span>
          <BookmarkIcon
            className={`w-5 h-5 nav-btn ml-auto ${
              isBookmarked ? "text-red-500" : ""
            }`}
            onClick={handleBookmarkClick}
            title={isBookmarked ? "Delete from favorites" : "Add to favorites"}
          />
        </div>
      </div>
    </div>
  );
};

export default Now;
