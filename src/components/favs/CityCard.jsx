import { Link } from "react-router-dom";
import useTemperature from "../../../hooks/useTemperature";
import DeleteFavModal from "../modals/DeleteFavModal";

const CityCard = ({ city, removeFromFavorites }) => {
  const { temperature, unit } = useTemperature(city.weather?.Temperature?.Imperial?.Value);

  return (
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
            {temperature}{unit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityCard;