import { useEffect } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import Search from "./Search";
import { HomeIcon, BookmarkIcon, MapPinIcon } from "@heroicons/react/24/solid";
import themes from "../../../themes.json";
import { useDispatch, useSelector } from "react-redux";
import useGeoLocation from "../../../hooks/useGeoLocation";
import { setLocation } from "../../features/userLocation/userLocationSlice";
import { selectCityData, setCityData } from "../../features/cities/citySlice";

const Header = ({ selectedTheme, setSelectedTheme }) => {
  const dispatch = useDispatch();
  const location = useGeoLocation();
  const cityData = useSelector(selectCityData); 

  useEffect(() => {
    localStorage.setItem("selectedTheme", selectedTheme);
  }, [selectedTheme]);

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  const fetchLocationData = async (lat, lon) => {
    try {
      const response = await fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${import.meta.env.VITE_APIKEY3}&q=${lat},${lon}`
      );

      if (!response.ok) {
        throw new Error("Error fetching location data");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error); // Log any errors
    }
  };

  const handleLocationClick2 = async () => {
    if (location.loaded && !location.error) {
      try {
        const data = await fetchLocationData(
          location.coordinates.lat,
          location.coordinates.lng
        );
        dispatch(setLocation(location.coordinates));
        dispatch(setCityData(data)); // Dispatch setCityData with the location data
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
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
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    }
  };

  return (
    <header
      data-theme={selectedTheme}
      className=" bg-base-200 sticky top-0 z-10 w-full border-b border-base-300"
    >
      <div className="h-20  grid grid-cols-2 md:grid-cols-3 items-center my-container  mx-auto px-4 ">
        {/* Left */}
        <div className="font-semibold text-sm md:text-lg lg:text-xl hidden md:block">
          Weather App
        </div>
        {/* Left */}

        {/* Middle */}
        <Search />
        {/* Middle */}

        {/* Right LG SCREEN*/}
        <div className="hidden lg:flex ml-auto">
          <ul className=" flex items-center space-x-3">
            {/* Navbar menu content here */}
            <li>
              <button
                onClick={handleLocationClick}
                className="btn btn-primary lowercase"
              >
                My Location
                <MapPinIcon className="w-5 h-5 text-red-500" />
              </button>
            </li>
            <li>
              <Link to={"/telaviv"}>
                <HomeIcon className="nav-btn" />
              </Link>
            </li>
            <li>
              <Link to={"/favs"}>
                <BookmarkIcon className="nav-btn text-red-500" />
              </Link>
            </li>
            <li>
              <select
                className="select font-semibold text-base w-full max-w-[140px] hover:bg-base-content/10 focus:bg-base-content/10 focus:border-none focus:outline-none hidden lg:block"
                value={selectedTheme}
                onChange={handleThemeChange}
              >
                {themes.map((theme) => (
                  <option className="bg-base-100" key={theme} value={theme}>
                    {theme}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>
        {/* Right LG SCREEN */}

        {/* Right SM Screen */}
        <Drawer
          handleThemeChange={handleThemeChange}
          selectedTheme={selectedTheme}
          themes={themes}
        />
        {/* Right SM Screen */}
      </div>
    </header>
  );
};

export default Header;
