import { useState, useEffect } from 'react';

// Custom hook to get user's geolocation
const useGeoLocation = () => {
  // State to store location data
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  // Callback for successful geolocation
  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        // Set latitude and longitude
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  // Effect to get geolocation on component mount
  useEffect(() => {
    // Check if geolocation is available
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    // Get current position
    // navigator.geolocation.getCurrentPosition(onSuccess, onError);
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }, []);

  return location;
};

export default useGeoLocation;