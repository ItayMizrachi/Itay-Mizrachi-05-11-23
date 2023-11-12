const LaterToday = ({ hourlyData }) => {
  return (
    <div>
      <h2 className="font-semibold text-xl my-5 ml-2">Today At</h2>
      <div className="overflow-x-auto rounded-lg scrollbar-hide transition-all duration-200 ease-out  scrollbar-thumb-gray-600 scrollbar-track-gray-300 flex space-x-5 hover:scrollbar-auto">
        {hourlyData &&
          hourlyData.map((item, index) => (
            <div
              key={index}
              className="w-52 h-60 pt-6 hover:shadow-md shadow-sm transition duration-150 ease-out border border-base-300 flex-none bg-base-200 rounded-xl mb-4"
            >
              <div className="card h-full">
                <div className="w-16 h-16 mx-auto">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={`https://developer.accuweather.com/sites/default/files/${
                      item.WeatherIcon < 10 ? "0" : ""
                    }${item.WeatherIcon}-s.png`}
                  />
                </div>
                <div className="card-body p-4">
                  <h2 className="card-title mx-auto text-center font-bold text-xl">
                    {new Date(item.DateTime).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </h2>
                  <p className="sm:hidden mx-auto text-center">
                    {item.IconPhrase.substring(0, 10)}
                  </p>
                  <p className="hidden sm:block mx-auto text-center">
                    {item.IconPhrase}
                  </p>
                  <p className="font-semibold text-2xl mx-auto text-center">
                    {Math.round(((item.Temperature.Value - 32) * 5) / 9)}°C
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LaterToday;