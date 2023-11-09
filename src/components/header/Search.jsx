import { useDispatch } from "react-redux";
import { setCityData, setCityError } from "../../features/cities/citySlice";
import { useNavigate, useLocation } from "react-router-dom";
import useWeatherApi from "../../../hooks/useWeatherApi";
import useSearchCity from "../../../hooks/useSearchCity";
import { useEffect } from "react";

const Search = () => {
  const location = useLocation();
  const city = location.pathname.substring(1); // remove the leading slash
  const dispatch = useDispatch();
  const { fetchCity } = useWeatherApi();
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
        const data = await fetchCity("Tel Aviv");
        dispatch(setCityData(data));
      } catch (error) {
        dispatch(setCityError(error.message));
        console.error("Error fetching city:", error);
      }
    };
    fetchInitialCity();
  }, []);

  return (
    <form
      className="flex-grow"
      onSubmit={(e) => {
        e.preventDefault();
        search(searchCity);
      }}
    >
      <input
        type="text"
        placeholder="Search City.."
        className="input w-full max-w-xs border border-base-300 "
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </form>
  );
};

export default Search;
