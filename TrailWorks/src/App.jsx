import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import NavBar from "../src/components/NavBar";
import Academy from "../src/components/Academy/Academy";
import EcoProject from "../src/components/EcoProject/EcoProject";
import Alquiler from "../src/components/Alquiler/Alquiler";
import Tour from "./components/Tour/Tour";
import Novedad4 from "./components/Novedades/Novedad4"
import Novedad1 from "./components/Novedades/Novedad1"
import Novedad2 from "./components/Novedades/Novedad2"
import Panam from "./components/Eventos/Panam";
import Motul from "./components/Eventos/Motul";
import Novedad3 from "./components/Novedades/Novedad3";

function App() {
  return (
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academia" element={<Academy />} />
        <Route path="/ecoproject" element={<EcoProject />} />
        <Route path="/alquiler" element={<Alquiler/>} />
        <Route path="/tour" element={<Tour/>} />
        <Route path="/novedad4" element={<Novedad4 />} />
        <Route path="/novedad2" element={<Novedad2 />} />
        <Route path="/novedad3" element={<Novedad3 />} />
        <Route path="/evento2" element={<Motul />} />
        <Route path="/novedad1" element={<Novedad1/>} />
        <Route path="/evento1" element={<Panam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
