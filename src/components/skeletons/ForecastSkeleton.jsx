const ForecastSkeleton = () => {
  
  return (
    <div className="p-3 px-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-8 h-8 mr-1 bg-gray-300 animate-pulse rounded-full"></div>
        <p className="w-16 h-4 bg-gray-300 animate-pulse rounded-lg"></p>
      </div>
      <p className="w-20 h-4 bg-gray-300 animate-pulse rounded-lg"></p>
      <p className="w-16 h-4 bg-gray-300 animate-pulse rounded-lg"></p>
    </div>
  );
};

export default ForecastSkeleton;