import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import Search from "./Search";
import { HomeIcon, BookmarkIcon, MapPinIcon } from "@heroicons/react/24/solid";
import useLocationLogic from "../../../hooks/useLocationLogic";
import ThemeSelect from "./ThemeSelect";
import useThemeLogic from "../../../hooks/useThemeLogic";
import { useState } from "react";
import Switch from "react-switch";
import SwitchCtoF from "./SwitchCtoF";

const Header = ({ selectedTheme, setSelectedTheme }) => {
  const { handleLocationClick } = useLocationLogic();
  const { handleThemeChange } = useThemeLogic({
    selectedTheme,
    setSelectedTheme,
  });
  const [checked, setChecked] = useState(false);

  const handleSwitchChange = (checked) => {
    setChecked(checked);
  };

  return (
    <header
      data-theme={selectedTheme}
      className=" bg-base-200 sticky top-0 w-full border-b border-base-300"
    >
      <div className="h-20 grid grid-cols-2 sm:grid-cols-3 items-center my-container  mx-auto px-4 ">
        {/* Left */}
        <div className="md:w-48 w-44 ">
          <Link to={"/telaviv"}>
            <img
              className="w-full h-full object-contain cursor-pointer"
              src="/images/logo.png"
              alt="logo"
            />
          </Link>
        </div>

        {/* Middle */}
        <div className="hidden sm:block">
          <Search />
        </div>

        {/* Right LG SCREEN*/}
        <div className="hidden lg:flex ml-auto">
          <ul className=" flex items-center space-x-3">
            {/* Navbar menu content here */}
            <li>
              <Link to={"/telaviv"}>
                <HomeIcon title="Home" className="nav-btn" />
              </Link>
            </li>
            <li>
              <Link to={"/favs"}>
                <BookmarkIcon title="Favorite Cities" className="nav-btn " />
              </Link>
            </li>
            <li>
              <MapPinIcon
                title="My Location Weather"
                onClick={handleLocationClick}
                className=" text-red-500 nav-btn"
              />
            </li>
            <li>
              <SwitchCtoF />
            </li>
            <li>
              <ThemeSelect
                handleThemeChange={handleThemeChange}
                selectedTheme={selectedTheme}
              />
            </li>
          </ul>
        </div>

        {/* Right SM Screen */}
        <Drawer
          handleThemeChange={handleThemeChange}
          selectedTheme={selectedTheme}
        />
      </div>
    </header>
  );
};

export default Header;
