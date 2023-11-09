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

  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col" data-theme={selectedTheme}>
        <BrowserRouter>
          <Header
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

