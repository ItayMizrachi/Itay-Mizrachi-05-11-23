import { useDispatch } from "react-redux";
import { setCityData, setCityError } from "../../features/cities/citySlice";
import { useLocation } from "react-router-dom";
import useWeatherApi from "../../../hooks/useWeatherApi";
import useSearchCity from "../../../hooks/useSearchCity";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const location = useLocation();
  const city = location.pathname.substring(1); // remove the leading slash
  const dispatch = useDispatch();
  const { fetchCity, loadingWeather } = useWeatherApi();
  const { searchCity, setSearchCity, search, handleKeyPress, suggestions, handleInputChange, errorMessage } =
    useSearchCity(fetchCity, dispatch);

  useEffect(() => {
    if (city) {
      search(city);
    }
  }, [city]);

    // Effect for fetching initial city data
  useEffect(() => {
    const fetchInitialCity = async () => {
      try {
        if (!city) {
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
      className="flex mx-auto justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        search(searchCity);
      }}
    >
     <div className="relative ">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Search City.."
            className="input w-full border border-base-300 pr-10"
            value={searchCity}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
          {errorMessage && (
            <div className="text-red-500 bg-gray-100 p-2 top-14 z-10 rounded-md absolute">{errorMessage}</div>
          )}
        </div>
        {loadingWeather ? (
          <span className="loading loading-spinner loading-sm  absolute top-1/2 right-3 -translate-y-1/2"></span>
        ) : (
          <MagnifyingGlassIcon className="absolute text-base-content/60 top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 " />
        )}

        {suggestions.length > 0 && isInputFocused && (
          <div className="absolute w-full max-w-xs max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-base-content/80 bg-base-100 border border-base-300 rounded-md z-10">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.Key}
                onMouseDown={() => {
                  setSearchCity(suggestion?.LocalizedName);
                  search(suggestion?.LocalizedName);
                  setIsInputFocused(false);
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
