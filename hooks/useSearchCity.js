import { useEffect, useState } from "react";
import { setCityData, setCityError } from "../src/features/cities/citySlice";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import axios from "axios";

const useSearchCity = (fetchCity, dispatch) => {
  const [searchCity, setSearchCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const nav = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

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
        `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${import.meta.env.VITE_APIKEY3}&q=${query}`
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  }, 300); // delay in ms

  useEffect(() => {
    if (searchCity.length > 2) {
      fetchSuggestions(searchCity);
    } else {
      setSuggestions([]);
    }
  }, [searchCity]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Check if the value contains only English letters and spaces
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setSearchCity(value);
      setErrorMessage(""); // Clear the error message
    } else {
      setErrorMessage("Please enter only English letters");
    }
  };

  return { searchCity, setSearchCity, search, handleKeyPress, suggestions, handleInputChange, errorMessage };
};

export default useSearchCity;