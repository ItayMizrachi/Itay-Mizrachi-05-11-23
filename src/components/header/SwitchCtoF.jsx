import Icon from "./Icon";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { toggleTempUnit } from "../../features/tempUnit/tempUnitSlice";

const SwitchCtoF = () => {
  const dispatch = useDispatch();
  const tempUnit = useSelector((state) => state.tempUnit);
  const checked = tempUnit === "C";

  const handleSwitchChange = (checked) => {
    dispatch(toggleTempUnit());
  };

  return (
    <label className="font-semibold" title="Celsius/Fahrenheit">
      <Switch
        onChange={handleSwitchChange}
        checked={checked}
        uncheckedIcon={<Icon>F</Icon>}
        checkedIcon={<Icon>C</Icon>}
        onColor="#ff7abc" 
        offColor="#bf95f9"
      />
    </label>
  );
};

export default SwitchCtoF;
