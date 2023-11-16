import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import Search from "./Search";
import { HomeIcon, BookmarkIcon, MapPinIcon } from "@heroicons/react/24/solid";
import useLocationLogic from "../../../hooks/useLocationLogic";
import ThemeSelect from "./ThemeSelect";
import SwitchCtoF from "./SwitchCtoF";
import {  useSelector } from "react-redux";

const Header = () => {
  const { handleLocationClick } = useLocationLogic();
  const selectedTheme = useSelector((state) => state.theme);
 
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
              <ThemeSelect />
            </li>
          </ul>
        </div>

        {/* Right SM Screen */}
        <Drawer />
      </div>
    </header>
  );
};

export default Header;
