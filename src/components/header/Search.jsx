import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCityData, setCityError } from "../../features/cities/citySlice";
import useWeatherApi from "../../../hooks/useWeatherApi";
import { useNavigate, useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const city = location.pathname.substring(1); // remove the leading slash
  const dispatch = useDispatch();
  const { fetchCity } = useWeatherApi();
  const [searchCity, setSearchCity] = useState("");
  const nav = useNavigate();

  const search = async (cityName) => {
    try {
      const data = await fetchCity(cityName);
      dispatch(setCityData(data));
      nav(`/${cityName}`);
    } catch (error) {
      dispatch(setCityError(error.message));
      console.error("Error fetching city:", error);
    }
    setSearchCity("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      search(searchCity);
    }
  };

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
        className="input w-full max-w-xs border border-base-300"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </form>
  );
};

export default Search;