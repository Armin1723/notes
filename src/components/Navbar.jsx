import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ children }) => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const location = useLocation()
  const isActive = location.pathname === '/about'
  return (
    <div className="flex w-screen justify-between items-center py-2 px-4 border-b border-gray-600 shadow-[0_0_5px_gray] bg-transparent backdrop-blur-lg">
      <div className="navLeft">
        <Link to='/' className="text-xl font-bold">Notess</Link>
      </div>
      <div className="navRight flex gap-4">
        {children}
        
        <Link to='/about' className={`hover-effect text-md max-sm:hidden flex ${isActive && 'text-neon-green'}`}>About</Link>
        <button onClick={() => dispatch(toggleTheme())} className="text-2xl hover:animate-pulse">
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
