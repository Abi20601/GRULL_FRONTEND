import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import HomeP from "./components/HomeP/HomeP";
import { useDispatch } from "react-redux";
import { getProducts } from "./store/actions/prouctsActions";
import About from "./components/About/About";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme("dark");
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Router>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div id={theme} className="App">
            <Navbar />
            <Routes>
              <Route path = "/HomeP" element={<HomeP />} />
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </div>
        </ThemeContext.Provider>
      </Router>
    </>
  );
}

export default App;
