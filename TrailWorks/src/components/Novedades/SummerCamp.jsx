import React from 'react';
import ImgSlider from '../ImgSlider';
import img1 from "../../img/sumrecap/sumrecap1.jpeg"
import img2 from "../../img/sumrecap/sumrecap2.jpeg"
import img3 from "../../img/sumrecap/sumrecap3.jpeg"
import img4 from "../../img/sumrecap/sumrecap4.jpeg"
import img5 from "../../img/sumrecap/sumrecap5.jpeg"
import img6 from "../../img/sumrecap/sumrecap6.jpeg"
import img7 from "../../img/sumrecap/sumrecap7.jpeg"
import { useEffect } from 'react';

const SummerCamp = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="bg-gradient-to-r from-gray-600 via-gray-400 to-white min-h-screen p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Columna del texto */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center md:text-left text-gray-800">Summer Camp "TrailWorks Academy" 2024</h1>
                    <h2 className='text-3xl md:text-4xl font-semibold mb-2 md:mb-12 text-center md:text-left text-gray-700'>PHOTO RECAP</h2>
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

export default SummerCamp;
