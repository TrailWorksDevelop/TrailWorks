import React from 'react';
import ImgSlider from '../ImgSlider';  // Importa tu componente ImgSlider
import img1 from '../../img/motul/motulinfo.jpeg';  // Ejemplo de importación de imágenes
import { useEffect } from 'react';

const MotulFecha3 = () => {
    const images = [img1];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gradient-to-r from-gray-600 via-gray-400 to-white min-h-screen p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Columna del texto */}
                <div className="flex flex-col ">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center md:text-left text-gray-800">Motul Pro Downhill Fecha 3!</h1>
                    <h2 className='text-3xl md:text-4xl font-semibold mb-2 md:mb-12 text-center md:text-left text-gray-700'> EL SALVADOR MOUNTAIN BIKE CHAMPIONSHIP</h2>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                        Ya estamos listos para la tercera fecha de la MOTUL PRO DOWNHILL SERIES el proximo 8 de Septiembre 
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                        El Campeonato Nacional es la máxima competición en El Salvador, donde los mejores corredores se enfrentan para determinar a los campeones nacionales, quienes luego representarán a nuestro país en eventos internacionales.
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                        Inscripciones abiertas a traves de amiiwo como siempre. Fecha limite de inscripcion es el 6 de Septiembre a la media noche, sabemos que las tarjetas de credito pueden fallar asi que intenten hacerlo con tiempo.
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">

                        Serán 2 runs! Una qualifying no cuenta, y la race run, asi como seran los Panamericanos DHI.
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                        A darle riders!</p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                        Inscripciones:
                        <a href="
                        https://amiiwo.com/store/product/motul-pro-downhill-series-el-salvador-open-dh/" 
                        className="text-blue-900 hover:underline">
                        https://amiiwo.com/store/product/motul-pro-downhill-series-el-salvador-open-dh/
                        </a>
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

export default MotulFecha3;