import { useState } from "react";
import { setCityData, setCityError } from "../src/features/cities/citySlice";
import { useNavigate } from "react-router-dom";

const useSearchCity = (fetchCity, dispatch) => {
  const [searchCity, setSearchCity] = useState("");
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

  return { searchCity, setSearchCity, search, handleKeyPress };
};

export default useSearchCity;
