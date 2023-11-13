import useTemperature from "../../../hooks/useTemperature";

const HourlyDataItem = ({ item }) => {
  const { temperature, unit } = useTemperature(item.Temperature.Value);

  return (
    <div
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
          <p className="mx-auto text-center">{item.IconPhrase}</p>
          <p className="font-semibold text-2xl mx-auto text-center">
            {temperature}
            {unit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HourlyDataItem;