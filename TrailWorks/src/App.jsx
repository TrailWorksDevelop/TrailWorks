import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import NavBar from "../src/components/NavBar";
import Academy from "../src/components/Academy/Academy";
import EcoProject from "../src/components/EcoProject/EcoProject";
import Alquiler from "../src/components/Alquiler/Alquiler";
import Tour from "./components/Tour/Tour";
import SummerCamp from "./components/Novedades/SummerCamp";
import MauriCastaneda from "./components/Novedades/MauriCastaneda";
import EcoFlow from "./components/Novedades/EcoFlow"
import Panam from "./components/Eventos/Panam";
import Motul from "./components/Eventos/Motul";
import MotulFecha3 from "./components/Novedades/MotulFecha3"

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
        <Route path="/novedad3" element={<SummerCamp />} />
        <Route path="/novedad1" element={<MauriCastaneda />} />
        <Route path="/novedad2" element={<EcoFlow />} />
        <Route path="/evento2" element={<Motul />} />
        <Route path="/novedad4" element={<MotulFecha3 />} />
        <Route path="/evento1" element={<Panam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
