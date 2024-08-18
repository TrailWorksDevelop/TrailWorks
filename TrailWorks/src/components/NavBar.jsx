import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const NavBar = () => {
  return (
    <div>
      <header className="bg-white text-black flex flex-col items-center p-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-20 md:h-28" />
        </Link>
      </header>

      {/* Menú de navegación superior */}
      <div className="bg-gray-600 text-white p-2 md:p-3">
        <div className="grid grid-cols-2 md:flex md:justify-center text-xl md:text-3xl gap-2 md:gap-12">
          <Link to="/academia" className="italic hover:text-gray-400 uppercase text-center">ACADEMIA</Link>
          <Link to="/ecoproject" className="italic hover:text-gray-400 uppercase text-center">ECO PROJECT</Link>
          <Link to="/alquiler" className="italic hover:text-gray-400 uppercase text-center">ALQUILER BICIS</Link>
          <Link to="/tour" className="italic hover:text-gray-400 uppercase text-center">TOURS</Link>
        </div>
      </div>

      {/* Menú inferior */}
      <div className="bg-gray-900 text-white p-2 md:p-3">
        <div className="grid grid-cols-2 md:flex md:justify-center text-xl md:text-3xl gap-2 md:gap-12">
          <a href="#about" className="italic hover:text-gray-400 uppercase text-center">ABOUT US</a>
          <a href="#contact" className="italic hover:text-gray-400 uppercase text-center">CONTACT US</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
