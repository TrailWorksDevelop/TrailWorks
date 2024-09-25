import React from "react";
import { useEffect } from "react";
import ImgSlider from "../ImgSlider";
import img1 from "../../img/mauri/mana3.jpeg"

const Novedad3 = () => { 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-gradient-to-r from-gray-600 via-gray-400 to-white min-h-screen p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Columna del texto */}
                <div className="flex flex-col ">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center md:text-left text-gray-800">Mariana Salazar regresa a El Salvador!</h1>
                    <p className="text-lg md:text-xl mb-6 mt-4 text-justify">
                    Mariana Salazar retorna a El Salvador para su preparación en cara al campeonato panamericano 2024. Por primera vez en la historia 
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                    El Salvador es sede de un campeonato de esta magnitud. Con más de 15 países y 150 atletas Trailworks en conjunto a la federación salvadoreña de ciclismo y el gobierno de el Salvador están generando comunidad y cultura con este lindo deporte.                    
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                    Mariana a sido clave en esta organización ya que ella es la atleta insignia del evento.                    </p>
                </div>

                {/* Columna del slider de imágenes */}
                <div className="flex items-center justify-center">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    )

};

export default Novedad3;