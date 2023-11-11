// src/hooks/useThemeLogic.js
import { useEffect } from "react";

const useThemeLogic = ({selectedTheme, setSelectedTheme}) => {
 
  useEffect(() => {
    localStorage.setItem("selectedTheme", selectedTheme);
  }, [selectedTheme]);

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  return { handleThemeChange };
};

export default useThemeLogic;