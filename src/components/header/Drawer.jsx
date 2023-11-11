import {
  Bars3Icon,
  BookmarkIcon,
  HomeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { useRef } from "react";
import { Link } from "react-router-dom";
import useLocationLogic from "../../../hooks/useLocationLogic";
import Search from "./Search";

const Drawer = ({ selectedTheme, handleThemeChange, themes }) => {
  const { handleLocationClick } = useLocationLogic();
  const drawerToggleRef = useRef(null);

  const closeDrawer = () => {
    if (drawerToggleRef.current) {
      drawerToggleRef.current.click();
    }
  };

  return (
    <div className="drawer drawer-end lg:hidden">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-end">
        <label htmlFor="my-drawer-4" className="drawer-button btn">
          <Bars3Icon className="w-7 h-7" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="p-4 w-80 min-h-full bg-base-200 ">
          {/* Sidebar content here */}
          <li onClick={() => closeDrawer()} className="drawer-btn">
            <Link to={"/"}>
              <div className="flex justify-between">
                <div>Home</div>
                <div>
                  <HomeIcon className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </li>
        
          <li onClick={() => closeDrawer()} className="drawer-btn">
            <Link to={"/favs"}>
              <div className="flex justify-between">
                <div>Favorites</div>
                <div>
                  <BookmarkIcon className="w-5 h-5 " />
                </div>
              </div>
            </Link>
          </li>
          <li onClick={handleLocationClick} className="drawer-btn cursor-pointer">
            <div className="flex justify-between">
              <div>My Location</div>
              <div>
                <MapPinIcon className="w-5 h-5 text-red-500" />
              </div>
            </div>
          </li>
          <li>
            <li className="my-2">
              <Search/>
            </li>
            <select
              className="select font-semibold text-base w-full hover:bg-base-content/10 focus:bg-base-content/10 focus:border-none focus:outline-none"
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
    </div>
  );
};

export default Drawer;
