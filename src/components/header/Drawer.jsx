import {
  Bars3Icon,
  BookmarkIcon,
  HomeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import useLocationLogic from "../../../hooks/useLocationLogic";
import ThemeSelect from "./ThemeSelect";

const Drawer = ({ selectedTheme, handleThemeChange }) => {
  const { handleLocationClick } = useLocationLogic();

  const closeDrawer = () => {
    document.getElementById("my-drawer-4").checked = false;
  };

  return (
    <div className="drawer drawer-end lg:hidden z-50">
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
          <li onClick={closeDrawer} className="drawer-btn">
            <Link to={"/"}>
              <div className="flex justify-between">
                <div>Home</div>
                <div>
                  <HomeIcon className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </li>

          <li onClick={closeDrawer} className="drawer-btn">
            <Link to={"/favs"}>
              <div className="flex justify-between">
                <div>Favorites</div>
                <div>
                  <BookmarkIcon className="w-5 h-5 " />
                </div>
              </div>
            </Link>
          </li>
          <li
            onClick={handleLocationClick}
            className="drawer-btn cursor-pointer"
          >
            <div className="flex justify-between">
              <div>My Location</div>
              <div>
                <MapPinIcon className="w-5 h-5 text-red-500" />
              </div>
            </div>
          </li>
          <li>
            <ThemeSelect
              handleThemeChange={handleThemeChange}
              selectedTheme={selectedTheme}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
