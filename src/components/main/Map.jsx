import ReactMapGL, { Marker } from "react-map-gl";
import { selectCityData } from "../../features/cities/citySlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Map = () => {
  let cityData = useSelector(selectCityData);
  // Ensure cityData is always an array
  if (!Array.isArray(cityData)) {
    cityData = [cityData];
  }
  const [viewport, setViewport] = useState({
    longitude: cityData[0]?.GeoPosition?.Longitude,
    latitude: cityData[0]?.GeoPosition?.Latitude,
    zoom: 10,
  });

  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    if (cityData && cityData.length > 0 && cityData[0] && cityData[0].GeoPosition && JSON.stringify(cityData[0].GeoPosition) !== JSON.stringify(fetchedData)) {
      setViewport((prevViewport) => ({
        ...prevViewport,
        longitude: cityData[0].GeoPosition.Longitude,
        latitude: cityData[0].GeoPosition.Latitude,
      }));
      setFetchedData(cityData[0].GeoPosition);
    }
  }, [cityData]);
  
  //TODO - ADD Marker ON the MAP 
  return (
    <div className="p-2 md:ml-4 ml-2 hidden md:block w-full h-[300px]">
      <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        attributionControl={false}
        style={{
          width: "100%",
          height: "100%",
          marginLeft: "auto",
          marginTop: 11,
          borderRadius: "32px ",
        }}
        mapStyle="mapbox://styles/itaymiz98/clomyvtrr00bm01pbb5m59c3z"
        mapboxAccessToken="pk.eyJ1IjoiaXRheW1pejk4IiwiYSI6ImNsbXQ2MTZuaTAyN28yanBlcXhqdG85ZzEifQ.9m2ipPtFzr6zgrvfIlvjBg"
      >
        {/* <Marker
          longitude={viewport.longitude}
          latitude={viewport.latitude}
        >
            <MapPinIcon className="w-5 h-5 text-red-500" />
        </Marker> */}
      </ReactMapGL>
    </div>
  );
};

export default Map;     