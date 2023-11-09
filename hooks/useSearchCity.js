import { useState } from 'react';
import { setCityData, setCityError } from "../src/features/cities/citySlice";

const useSearchCity = (fetchCity, dispatch) => {
  const [searchCity, setSearchCity] = useState("");

  const search = async (cityName) => {
    try {
      const data = await fetchCity(cityName);
      dispatch(setCityData(data));
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