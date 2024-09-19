import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/theme/themeSlice";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import Join from "./components/Join";

const App = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <BrowserRouter>
      <div
        className={`font-['Wicked_Mouse_Regular'] ${
          theme === "dark"
            ? "bg-[#1e1e1e] text-white"
            : "bg-gradient-to-r from-transparent to-green-300/50"
        } flex flex-col transition-all duration-300 min-h-screen tracking-wider`}
      >
        <Navbar>
          <Link to="/join" className="button text-xs mt-2">
            <span className="button_top font-bold">Join</span>
          </Link>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<Details />} />
            <Route path="about" element={<About />} />
            <Route path="join" element={<Join />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
