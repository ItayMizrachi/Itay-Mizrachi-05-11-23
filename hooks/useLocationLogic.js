import { useDispatch, useSelector } from "react-redux";
import useGeoLocation from "../hooks/useGeoLocation";
import { selectCityData, setCityData } from "../src/features/cities/citySlice";
import { setLocation } from "../src/features/userLocation/userLocationSlice";
import { useNavigate } from "react-router-dom";

const useLocationLogic = () => {
  const dispatch = useDispatch();
  const location = useGeoLocation();
  const cityData = useSelector(selectCityData);
  const nav = useNavigate();

  const fetchLocationData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${
          import.meta.env.VITE_APIKEY3
        }&q=${lat},${lon}`
      );

      if (!response.ok) {
        throw new Error("Error fetching location data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleLocationClick = async () => {
    if (location.loaded && !location.error) {
      try {
        const data = await fetchLocationData(
          location.coordinates.lat,
          location.coordinates.lng
        );
        dispatch(setLocation(location.coordinates));
        // Only dispatch setCityData if the new data is different from the current cityData
        if (JSON.stringify(data) !== JSON.stringify(cityData)) {
          dispatch(setCityData(data));
        }
        nav("/" + data.EnglishName);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    }
    document.getElementById("my-drawer-4").checked = false;
  };

  return { handleLocationClick };
};

export default useLocationLogic;
