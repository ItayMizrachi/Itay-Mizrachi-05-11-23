import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import store from "./store/store";
import { useState } from "react";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";

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
          <div className="flex-grow">
            <AppRoutes />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
