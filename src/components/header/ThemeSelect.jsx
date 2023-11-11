import React from "react";
import themes from "../../../themes.json";

const ThemeSelect = ({ handleThemeChange, selectedTheme }) => {
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
