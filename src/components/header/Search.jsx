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
  const { searchCity, setSearchCity, search, handleKeyPress, suggestions } =
    useSearchCity(fetchCity, dispatch);

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
          className="input w-full max-w-xs border border-base-300 pl-8 pr-10"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        {suggestions.length > 0 && (
          <div className="absolute w-full max-w-xs max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-base-content/80 bg-base-200 border border-base-300 rounded-md z-10">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.Key}
                onClick={() => {
                  setSearchCity(suggestion?.LocalizedName);
                  search(suggestion?.LocalizedName);
                }}
                className="px-3 py-2 cursor-pointer hover:bg-base-content/5"
              >
                {suggestion?.LocalizedName}
              </div>
            ))}
          </div>
        )}
      </div>
    </form>
  );
};

export default Search;
