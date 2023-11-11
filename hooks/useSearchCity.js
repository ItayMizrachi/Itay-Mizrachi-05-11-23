import { useEffect, useState } from "react";
import { setCityData, setCityError } from "../src/features/cities/citySlice";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import axios from "axios";

const useSearchCity = (fetchCity, dispatch) => {
  const [searchCity, setSearchCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const nav = useNavigate();

  const search = async (cityName) => {
    try {
      const data = await fetchCity(cityName);
      dispatch(setCityData(data));
      nav("/" + cityName); // Navigate to the new city name
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

  const fetchSuggestions = debounce(async (query) => {
    try {
      const response = await axios.get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${import.meta.env.VITE_APIKEY3}&q=${query}`
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  }, 300); // delay in ms

  useEffect(() => {
    if (searchCity.length > 2) {
      fetchSuggestions(searchCity);
      console.log(suggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchCity]);

  return { searchCity, setSearchCity, search, handleKeyPress, suggestions };
};

export default useSearchCity;