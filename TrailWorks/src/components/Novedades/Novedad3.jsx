import React from "react";
import img1 from "../../img/ecoflow/aviso1.jpeg"

import { useEffect } from "react";

const Novedad3 = () => { 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (

        <div className="bg-gradient-to-r from-gray-600 via-gray-400 to-white min-h-screen p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Columna del texto */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl md:text-7xl font-bold mb-2 text-center md:text-left text-gray-800">AVISO!</h1>
                    <h2 className='text-3xl md:text-5xl font-semibold mb-2 md:mb-12 text-center md:text-left text-gray-700'>Importante</h2>
                    <p className="text-xl md:text-2xl mb-6 text-justify">
                    Para todos los atletas salvadoreños inscritos al campeonato panamericano de de downhill, VIERENES 20 tendremos time training en la pista flow.
                    </p>
                    <p className="text-xl font-semibold md:text-2xl mb-2 text-justify">
                    2:00 PM : TRACK WALK CON 2 INVITADOS INTERNACIONALES SORPRESA
                    </p>
                    <p className="text-xl font-semibold md:text-2xl mb-6 text-justify">
                    3:30 PM - 5:30 PM : TIMED TRAININGS
                    </p>
                    </div>
                {/* Columna del slider de imágenes */}
                <div className="flex items-center justify-center">
                    <img src={img1} alt="" />
                </div> {/* Columna del slider de imágenes */}
            </div>
        </div>
    )

};

export default Novedad3;