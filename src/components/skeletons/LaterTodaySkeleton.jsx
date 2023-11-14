const LaterTodaySkeleton = () => {
  
  return (
    <div>
      <h2 className="font-semibold text-xl my-5 ml-2">Today At</h2>
      <div className="overflow-x-auto rounded-lg scrollbar-hide transition-all duration-200 ease-out  scrollbar-thumb-gray-600 scrollbar-track-gray-300 flex space-x-5 hover:scrollbar-auto">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="w-52 h-60 pt-6 shadow-sm transition duration-150 ease-out border border-base-300 flex-none bg-base-200 rounded-xl mb-4 animate-pulse">
            <div className=" h-full">
              <div className="w-16 h-16 mx-auto bg-gray-400 rounded-full"></div>
              <div className="mt-3 p-4">
                <div className="font-semibold text-2xl mx-auto text-center h-6 w-24 bg-gray-400 rounded-lg"></div>
                <div className="mx-auto text-center mt-4 mb-4 h-4 w-28 bg-gray-400 my-2 rounded-lg"></div>
                <div className=" mx-auto text-center font-bold text-xl h-8 w-12 bg-gray-400 rounded-lg"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaterTodaySkeleton;