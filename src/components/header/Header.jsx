import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import Search from "./Search";
import { HomeIcon, BookmarkIcon, MapPinIcon } from "@heroicons/react/24/solid";
import useLocationLogic from "../../../hooks/useLocationLogic";
import ThemeSelect from "./ThemeSelect";
import useThemeLogic from "../../../hooks/useThemeLogic";

const Header = ({ selectedTheme, setSelectedTheme }) => {
  const { handleLocationClick } = useLocationLogic();
  const { handleThemeChange } = useThemeLogic({selectedTheme, setSelectedTheme});

  return (
    <header
      data-theme={selectedTheme}
      className=" bg-base-200 sticky top-0 w-full border-b border-base-300"
    >
      <div className="h-20  grid grid-cols-2 md:grid-cols-3 items-center my-container  mx-auto px-4 ">
        {/* Left */}
        <div className="w-48 ">
          <img
            className="w-full h-full object-contain"
            src="/images/logo.png"
            alt="logo"
          />
        </div>
        {/* Left */}

        {/* Middle */}
        <div className="hidden md:block">
          <Search />
        </div>
        {/* Middle */}

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
              <ThemeSelect
                handleThemeChange={handleThemeChange}
                selectedTheme={selectedTheme}
              />
            </li>
          </ul>
        </div>
        {/* Right LG SCREEN */}

        {/* Right SM Screen */}
        <Drawer
          handleThemeChange={handleThemeChange}
          selectedTheme={selectedTheme}
        />
        {/* Right SM Screen */}
      </div>
    </header>
  );
};

export default Header;
