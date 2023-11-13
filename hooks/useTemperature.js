import { useSelector } from "react-redux";

const useTemperature = (fahrenheit) => {
  const tempUnit = useSelector((state) => state.tempUnit);
  const celsius = ((fahrenheit - 32) * 5) / 9;
  const temperature = tempUnit === "C" ? Math.round(celsius) : Math.round(fahrenheit);
  const unit = tempUnit === "C" ? "°C" : "°F";

  return { temperature, unit };
};

export default useTemperature;