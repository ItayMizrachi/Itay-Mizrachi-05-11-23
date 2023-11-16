import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";

const App = () => {
  const selectedTheme = useSelector((state) => state.theme);

  useEffect(() => {
    localStorage.setItem("selectedTheme", selectedTheme);
  }, [selectedTheme]);

  return (
    <div
      className="min-h-screen flex flex-col scrollbar-thin scrollbar-thumb-base-content/80 scrollbar-track-base-200"
      data-theme={selectedTheme}
    >
      <BrowserRouter>
        <Header />
        <div className="flex-grow">
          <AppRoutes />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;