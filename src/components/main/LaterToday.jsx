const LaterToday = ({ hourlyData }) => {
    
  return (
    <div className="md:mx-2 mb-4 mt-5  max-w-xs sm:max-w-2xl md:max-w-full mx-auto ">
      <h2 className="font-semibold text-xl my-2 ml-2">Today At</h2>
      <div className="overflow-x-auto scrollbar-hide flex">
        {hourlyData &&
          hourlyData.map((item, index) => (
            <div
              key={index}
              className="w-52 m-2 pt-6 hover:shadow-lg shadow-md transition duration-150 ease-out border border-base-300  flex-none bg-base-200 rounded-xl"
            >
              <div className="card bordered">
                <div className="w-16 h-16 mx-auto">
                  <img
                    className="w-full h-full object-cover"
                    src={`http://developer.accuweather.com/sites/default/files/${
                      item.WeatherIcon < 10 ? "0" : ""
                    }${item.WeatherIcon}-s.png`}
                  />
                </div>
                <div className="card-body">
                  <h2 className="card-title mx-auto">
                    {new Date(item.DateTime).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </h2>
                  <p className="sm:hidden mx-auto">
                    {item.IconPhrase.substring(0, 10)}
                  </p>
                  <p className="hidden sm:block mx-auto">{item.IconPhrase}</p>
                  <p className="font-semibold text-2xl mx-auto">
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
