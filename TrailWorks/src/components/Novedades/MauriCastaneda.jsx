import React from "react";
import ImgSlider from "../ImgSlider";
import img1 from "../../img/prueba.jpeg"
import img2 from "../../img/mauri/mauri1.jpeg"
import img3 from "../../img/mauri/mauri2.jpeg"
import img4 from "../../img/mauri/mauri3.jpeg"
import img5 from "../../img/mauri/mauri4.jpeg"
import { useEffect } from "react";
const MauriCastaneda = () => {
    const images = [img1, img2, img3, img4, img5];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gradient-to-r from-gray-600 via-gray-400 to-white min-h-screen p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Columna del texto */}
                <div className="flex flex-col ">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center md:text-left text-gray-800">EcoProject Class by Mauricio Castaneda</h1>
                    <h2 className='text-3xl md:text-4xl font-semibold mb-2 md:mb-12 text-center md:text-left text-gray-700'>EcoProject Class Volumen 1</h2>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                    El día domingo 4 de agosto tuvimos nuestras primeras clases en apoyo a ECOPROJECT brindadas por uno de los mejores @mauriciorcastaneda
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                    La pasamos increíble aprendiendo y mejorando desde lo más básico hasta lo avanzado, gracias a ustedes está siendo posible todo esto, les agradecemos riders
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                    Esperen mucho más y siempre de la mejor calidad
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                    A darle riders!</p>
                </div>

                {/* Columna del slider de imágenes */}
                <div className="flex items-center justify-center">
                    <ImgSlider images={images} />
                </div>
            </div>
        </div>
    );
};

export default MauriCastaneda;
