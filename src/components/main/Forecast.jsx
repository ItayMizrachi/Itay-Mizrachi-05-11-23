const Forecast = ({ day, index }) => {
  const fahrenheit = day.Temperature.Maximum.Value;
  const celsius = ((fahrenheit - 32) * 5) / 9;

  return (
    <div
    className={`p-3 px-4 flex justify-between items-center hover:bg-base-content/5 ${
      index === 0 ? "rounded-t-lg" : ""
    } ${index === 4 ? "rounded-b-lg" : ""}`}
  >
      <div className="flex items-center">
        <div className="w-8 h-8 mr-1">
          <img
            className="w-full h-full object-cover"
            src={`https://developer.accuweather.com/sites/default/files/${
              day.Day.Icon < 10 ? "0" : ""
            }${day.Day.Icon}-s.png`}
            alt="Weather icon"
          />
        </div>
        <p>{Math.round(celsius)}°C</p>
      </div>
      <p title={day.Day.IconPhrase}>{day.Day.IconPhrase.substring(0, 14)}</p>
      <p className="font-bold">
        {new Date(day.Date).toLocaleDateString(undefined, {
          day: "2-digit",
          month: "2-digit",
        })}
      </p>
    </div>
  );
};

export default Forecast;
