import React from 'react';
import ImgSlider from '../ImgSlider';  // Importa tu componente ImgSlider
import img1 from '../../img/motul/motul1.jpeg';  // Ejemplo de importación de imágenes
import img2 from '../../img/motuldhv2.jpeg';
import img3 from "../../img/motul/motul3.jpeg"
import img5 from "../../img/motul/motul4.jpeg"
import { useEffect } from 'react';

const Motul = () => {
    const images = [img2, img3, img5];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gradient-to-r from-gray-600 via-gray-400 to-white min-h-screen p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Columna del texto */}
                <div className="flex flex-col ">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center md:text-left text-gray-800">Motul Pro Downhill</h1>
                    <h2 className='text-3xl md:text-4xl font-semibold mb-2 md:mb-12 text-center md:text-left text-gray-700'> EL SALVADOR MOUNTAIN BIKE CHAMPIONSHIP</h2>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                        Estamos emocionados de
                        anunciar que, por primera vez en la historia, el Campeonato Nacional de de Downhill MTB de El Salvador se unirá a la prestigiosa MOTUL PRO DOWNHILL SERIES. Este evento histórico
                        marcará un hito en el deporte, ya que el campeonato nacional será parte integral de nuestra serie de carreras.
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                        El Campeonato Nacional es la máxima competición en El Salvador, donde los mejores corredores se enfrentan para determinar a los campeones nacionales, quienes luego representarán a nuestro país en eventos internacionales.
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                        Esta colaboración entre la Federacion Salvadoreña de
                        Ciclismo y la MOTUL PRO DOWNHILL SERIES promete elevar aún más el nivel de la competencia y consolidar a El Salvador como un referente en el mundo del downhill a nivel nacional e internacional. ¿Estan listos?
                        #downhillmtb #elsalvador #extremesports
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                        Para conocer los standings, manual del corredor, fecha, actualizaciones e informacion completa puedes informarte en nuestro Instagram oficial @prodownhillseries.sv 
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

export default Motul;
