import React from "react";
import ImgSlider from "../ImgSlider";
import img1 from "../../img/ecoflow/flow1.jpeg"
import img2 from "../../img/ecoflow/flow2.jpeg"
import img3 from "../../img/ecoflow/flow3.jpeg"
import img4 from "../../img/ecoflow/flow4.jpeg"
import img5 from "../../img/ecoflow/flow5.jpeg"
import img6 from "../../img/ecoflow/flow6.jpeg"
import img7 from "../../img/ecoflow/flow7.jpeg"
import img8 from "../../img/ecoflow/flow8.jpeg"
import img9 from "../../img/ecoflow/flow9.jpeg"
import img10 from "../../img/ecoflow/flow10.jpeg"
import img11 from "../../img/ecoflow/flow11.jpeg"
import img12 from "../../img/ecoflow/flow12.jpeg"

import { useEffect } from "react";

const EcoFlow = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (

        <div className="bg-gradient-to-r from-gray-600 via-gray-400 to-white min-h-screen p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Columna del texto */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center md:text-left text-gray-800">Follow Up - Proyecto ECO FLOW</h1>
                    <h2 className='text-3xl md:text-4xl font-semibold mb-2 md:mb-12 text-center md:text-left text-gray-700'></h2>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                    Eco flow 2024 es uno de Los proyectos especiales de eco project.
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                    Eco flow consistió en organizar una reconstrucción masiva de las pistas de ciclismo con una inversión de $15,000 dólares. Eco project apoya directamente a la comunidad el espino ya que fomenta los empleos en la zona.
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                    Se espera poder tener un mega proyecto especial todos los años para poder convertir al eco parque el espino en el parque más de ciclismo más grande y completo de centro América
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                    Para mas informacion puedes visitar nuestras paginas en Instagram @trailworks y @ecoproject365 </p>
                </div>


                {/* Columna del slider de imágenes */}
                <div className="flex items-center justify-center">
                    <ImgSlider images={images} />
                </div> {/* Columna del slider de imágenes */}
            </div>
        </div>
    )

};

export default EcoFlow;