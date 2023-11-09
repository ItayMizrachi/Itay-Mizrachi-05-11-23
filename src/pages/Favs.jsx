import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Favs = () => {
  const [savedCities, setSavedCities] = useState([]);

  
  // Load the saved cities from local storage when the component mounts
  useEffect(() => {
    const cities = JSON.parse(localStorage.getItem("cities")) || [];
    setSavedCities(cities);
  }, []);

  // Function to remove a city from the saved cities
  const removeFromFavorites = (cityKey) => {
    const newSavedCities = savedCities.filter((city) => city.Key !== cityKey);
    localStorage.setItem("cities", JSON.stringify(newSavedCities));
    setSavedCities(newSavedCities);
  };

  return (
    <div className="my-container mx-auto">
      <h1 className="font-semibold text-3xl my-4 ml-6 md:ml-16">
        Saved Cities
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center">
        {savedCities.length === 0 ? (
          <p className="ml-6 md:ml-14">You haven't saved any cities yet.</p>
        ) : (
          savedCities.map((city) => (
            <div
              key={city.Key}
              className="w-52 m-2 pt-6 flex-none bg-base-200 rounded-xl relative my-3 border border-base-300 shadow-lg"
            >
              <button
                onClick={() => removeFromFavorites(city.Key)}
                className="absolute top-2 right-2"
                title="Remove from favorites"
              >
                <XMarkIcon className="h-6 w-6 ml-auto cursor-pointer ease-out hover:text-gray-400 transform active:scale-90 transition-colors duration-200" />
              </button>
              <div className="card ">
                <div className="w-16 h-16 mx-auto">
                  <img
                    className="w-full h-full object-cover"
                    src={`http://developer.accuweather.com/sites/default/files/${
                      city?.weather?.WeatherIcon < 10 ? "0" : ""
                    }${city?.weather?.WeatherIcon}-s.png`}
                  />
                </div>
                <div className="card-body">
                  <Link
                    to={"/" + city.EnglishName}
                    className="font-semibold  text-lg mx-auto cursor-pointer"
                  >
                    {city.EnglishName}
                  </Link>
                  <p className="font-semibold text-2xl mx-auto">
                    {Math.round(city.weather?.Temperature?.Metric?.Value)}°C
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favs;
