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

//   const search = (city) => {
//     return new Promise((resolve, reject) => {
//       fetchCity(city)
//         .then((data) => {
//           dispatch(setCityData(data));
//           resolve();
//         })
//         .catch((error) => {
//           dispatch(setCityError(error.message));
//           console.error("Error fetching city:", error);
//           reject(error);
//         });
//     });
//   };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      search(searchCity);
    }
  };

  return { searchCity, setSearchCity, search, handleKeyPress };
};

export default useSearchCity;