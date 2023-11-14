const MapSkeleton = () => {
  return (
    <div className="leaflet-container skeleton-map bg-gray-400 animate-pulse relative">
      <img src="/images/pin-icon.png" alt="Pin" className="absolute w-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default MapSkeleton;