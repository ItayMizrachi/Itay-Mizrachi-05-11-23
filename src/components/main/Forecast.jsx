const Forecast = ({ day }) => {
  const fahrenheit = day.Temperature.Maximum.Value;
  const celsius = ((fahrenheit - 32) * 5) / 9;

  return (
    <div className="p-3 px-4 flex justify-between hover:bg-base-100/40">
      <div className="flex">
        <div className="w-8 h-8 mr-1">
          <img
            className="w-full h-full object-cover"
            src={`http://developer.accuweather.com/sites/default/files/${
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
      {/* <p>
        {day.Temperature.Maximum.Value}°{day.Temperature.Maximum.Unit}
      </p> */}
    </div>
  );
};

export default Forecast;
