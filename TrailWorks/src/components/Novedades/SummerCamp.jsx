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
                    E summer camp 2024 abrio sus puertas a chicos de 4 a 15 años desde finales de mayo a principios de agosto
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                    La apuesta por la juventud e iniciación temprana del deporte con los niños representa el compromiso de Trailworks por generar cultura y comunidad del ciclismo de montaña. Algunos de estos chicos llevan años  practicando su técnica y an mejorado mucho en poco tiempo
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                    El objetivo del curso de verano es q se diviertan haciendo actividades multidisciplinares con enfoque en ciclismo de montaña.
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                    Las puertas del curso de verano vuelven abrir en mayo 2025. Mientras tanto clases regulares de lunes a sábado por las tardes de 4:00 pm a 5:30 pm</p>
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
