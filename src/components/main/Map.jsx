import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import customIconUrl from "../../../public/images/pin-icon.png";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { selectCityData } from "../../features/cities/citySlice";

const Map = () => {
  let cityData = useSelector(selectCityData);
  // Ensure cityData is always an array
  if (!Array.isArray(cityData)) {
    cityData = [cityData];
  }
  console.log(cityData);
  const position = cityData[0]?.GeoPosition ? [cityData[0].GeoPosition.Latitude, cityData[0].GeoPosition.Longitude] : [51.505, -0.09];

  const customIcon = new Icon({
    iconUrl: customIconUrl,
    iconSize: [38, 38], // size of the icon
  });

  // custom cluster icon
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  return (
    <div>
      <MapContainer key={position.toString()} center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {/* Create a single marker */}
          <Marker 
            position={position} 
            icon={customIcon}
          >
            <Popup>{cityData[0]?.EnglishName},{cityData[0].Country.EnglishName}</Popup>
          </Marker>
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Map;