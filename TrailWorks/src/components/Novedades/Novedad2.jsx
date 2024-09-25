import React from "react";
import { useEffect } from "react";
import ImgSlider from '../ImgSlider';  // Importa tu componente ImgSlider
import img1 from '../../img/motul/resultadosopen.jpeg';  // Ejemplo de importación de imágenes

const Novedad2 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gradient-to-r from-gray-600 via-gray-400 to-white min-h-screen p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Columna del texto */}
                <div className="flex flex-col ">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center md:text-left text-gray-800">Resultados El Salvador Open</h1>
                    <h2 className='text-3xl md:text-4xl font-semibold mb-2 md:mb-12 text-center md:text-left text-gray-700'> EL SALVADOR MOUNTAIN BIKE CHAMPIONSHIP</h2>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                         Paz se lleva el primer lugar hasta Peru. Con altletas de 4 países diferentes, el pasado 8 de septiembre se llevó a cabo el Salvador Open. 
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                        El atleta peruano se coronó campeón del Open 2024 y el salvadoreño José Peña se quedó con el segundo.
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                        Resultados: en @prodownhillseires IG
                    </p>
                </div>

                {/* Columna del slider de imágenes */}
                <div className="flex items-center justify-center">
                <img src={img1} alt="Trabajos recientes"/>
                
                </div>
            </div>
        </div>
    );
};

export default Novedad2;
