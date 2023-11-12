import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import DeleteFavModal from "../components/modals/DeleteFavModal";

const Favs = () => {
  const [savedCities, setSavedCities] = useLocalStorage("cities", []);

  // Function to remove a city from the saved cities
  const removeFromFavorites = (cityKey) => {
    const newSavedCities = savedCities.filter((city) => city.Key !== cityKey);
    setSavedCities(newSavedCities);
  };

  return (
    <div className="my-container mx-auto my-8 md:min-h-[50vh] min-h-[70vh]">
      <h1 className="font-semibold text-3xl my-4 ml-6 md:ml-16 ">
        Favorite Cities
      </h1>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center">
        {savedCities.length === 0 ? (
          <p className=" md:ml-14 text-center w-full">
            You haven't saved any cities yet.
          </p>
        ) : (
          savedCities.map((city) => (
            <div
              key={city.Key}
              className="w-52 m-1 pt-6 flex-none bg-base-200 rounded-xl relative my-3 border border-base-300 shadow-lg"
            >
              <DeleteFavModal
                cityToDelete={city.Key}
                removeFromFavorites={removeFromFavorites}
              />
              <div className="card ">
                <div className="w-16 h-16 mx-auto">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={`https://developer.accuweather.com/sites/default/files/${
                      city?.weather?.WeatherIcon < 10 ? "0" : ""
                    }${city?.weather?.WeatherIcon}-s.png`}
                  />
                </div>
                <div className="card-body">
                  <Link
                    to={"/" + city?.EnglishName}
                    className="font-semibold  text-lg mx-auto cursor-pointer"
                  >
                    {city?.EnglishName}
                  </Link>
                  <p className="font-semibold text-2xl mx-auto">
                    {Math.round(city.weather?.Temperature?.Metric?.Value)}°C
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default Favs;
