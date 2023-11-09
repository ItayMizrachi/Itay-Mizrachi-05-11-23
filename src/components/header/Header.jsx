import { useEffect } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import Search from "./Search";
import { HomeIcon, BookmarkIcon } from "@heroicons/react/24/solid";

const Header = ({ selectedTheme, setSelectedTheme, themes }) => {

  useEffect(() => {
    localStorage.setItem("selectedTheme", selectedTheme);
  }, [selectedTheme]);

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  return (
    <header data-theme={selectedTheme} className=" bg-base-200 sticky top-0 z-10 w-full border-b border-base-300">
      <div className="h-20  grid grid-cols-2 md:grid-cols-3 items-center my-container  mx-auto px-4 ">
        {/* Left */}
        <div className="font-semibold text-sm md:text-lg lg:text-xl hidden md:block">
          Weather App
        </div>
        {/* Left */}

        {/* Middle */}
        <Search />
        {/* Middle */}

        {/* Right LG SCREEN*/}
        <div className="hidden lg:flex ml-auto">
          <ul className=" flex items-center space-x-3">
            {/* Navbar menu content here */}
            <li>
              <Link to={"/telaviv"}>
                <HomeIcon className="nav-btn" />
              </Link>
            </li>
            <li>
              <Link to={"/favs"}>
                <BookmarkIcon className="nav-btn text-red-500" />
              </Link>
            </li>
            <li>
              <select
                className="select font-semibold text-base w-full max-w-[140px] hover:bg-base-content/10 focus:bg-base-content/10 focus:border-none focus:outline-none hidden lg:block"
                value={selectedTheme}
                onChange={handleThemeChange}
              >
                {themes.map((theme) => (
                  <option className="bg-base-100" key={theme} value={theme}>
                    {theme}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>
        {/* Right LG SCREEN */}

        {/* Right SM Screen */}
          <Drawer
            handleThemeChange={handleThemeChange}
            selectedTheme={selectedTheme}
            themes={themes}
          />
        {/* Right SM Screen */}
      </div>
    </header>
  );
};

export default Header;
