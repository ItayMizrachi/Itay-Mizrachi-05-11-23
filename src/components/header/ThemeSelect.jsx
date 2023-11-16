import { useDispatch, useSelector } from "react-redux";
import themes from "../../../themes.json";
import { setTheme } from "../../features/theme/themeSlice";

const ThemeSelect = () => {
  const selectedTheme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleThemeChange = (event) => {
    dispatch(setTheme(event.target.value));
  };
  
  return (
    <select
      className="scrollbar-thin scrollbar-thumb-base-content/80 scrollbar-track-base-200 select font-semibold text-base w-full hover:bg-base-content/10 focus:bg-base-content/10 focus:border-none focus:outline-none"
      value={selectedTheme}
      onChange={handleThemeChange}
    >
      {themes.map((theme) => (
        <option className="bg-base-200" key={theme} value={theme}>
          {theme}
        </option>
      ))}
    </select>
  );
};

export default ThemeSelect;
