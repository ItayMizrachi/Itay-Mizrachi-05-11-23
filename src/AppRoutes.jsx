import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favs from "./pages/Favs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:city" element={<Home />} />
      <Route path="/favs" element={<Favs />} />
    </Routes>
  );
};

export default AppRoutes;
