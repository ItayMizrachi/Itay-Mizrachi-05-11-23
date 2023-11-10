import { useDispatch } from "react-redux";
import { setCityData, setCityError } from "../../features/cities/citySlice";
import { useLocation } from "react-router-dom";
import useWeatherApi from "../../../hooks/useWeatherApi";
import useSearchCity from "../../../hooks/useSearchCity";
import { useEffect } from "react";

const Search = () => {
  const location = useLocation();
  const city = location.pathname.substring(1); // remove the leading slash
  const dispatch = useDispatch();
  const { loadingWeather, fetchCity } = useWeatherApi();
  console.log(loadingWeather);
  const { searchCity, setSearchCity, search, handleKeyPress } = useSearchCity(
    fetchCity,
    dispatch
  );

  useEffect(() => {
    if (city) {
      search(city);
    }
  }, [city]);

  useEffect(() => {
    const fetchInitialCity = async () => {
      try {
        if (!city) {
          // Only fetch initial city data if there's no city in the URL
          const data = await fetchCity("Tel Aviv");
          dispatch(setCityData(data));
        }
      } catch (error) {
        dispatch(setCityError(error.message));
        console.error("Error fetching city:", error);
      }
    };
    fetchInitialCity();
  }, [city]);

  return (
    <form
      className="flex-grow"
      onSubmit={(e) => {
        e.preventDefault();
        search(searchCity);
      }}
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Search City.."
          className="input w-full max-w-xs border border-base-300 pl-8 pr-10" // Add right padding to prevent text from overlapping with the spinner
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </form>
  );
};

export default Search;
