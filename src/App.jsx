import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Favs from "./pages/Favs";
import store from "./store/store";
import { useState } from "react";
import Footer from "./components/Footer";

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem("selectedTheme") || "dracula"
  );

  const themes = [
    "light",
    "dark",
    "synthwave",
    "dracula",
    "halloween",
    "coffee",
    "aqua",
    "luxury",
    "retro",
    "valentine",
    "night",
    "forest",
    "business",
    "black",
    "cyberpunk",
    "garden",
    "cupcake",
    "bumblebee",
    "lofi",
    "emerald",
    "corporate",
    "pastel",
    "fantasy",
    "wireframe",
    "cmyk",
    "autumn",
    "acid",
    "lemonade",
    "winter",
  ];

  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col" data-theme={selectedTheme}>
        <BrowserRouter>
          <Header
            themes={themes}
            selectedTheme={selectedTheme}
            setSelectedTheme={setSelectedTheme}
          />
          <div className="content flex-grow">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/:city" element={<Home />} />  
              <Route path="/favs" element={<Favs />} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;

