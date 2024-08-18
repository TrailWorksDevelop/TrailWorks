import React from "react";
import img4 from "../../img/panams.jpeg"
import { useEffect } from "react";

const Panam = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (

        <div className="bg-gradient-to-r from-gray-600 via-gray-400 to-white p-4 min-h-screen md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Columna del texto */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center md:text-left text-gray-800">Panamericanos 2024</h1>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                        Un orgullo podes compartir con ustedes el afiche oficial del campeonato Panamericano de DH 2024. Evento Oficial de la union ciclista internacional.
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                        Septiembre 2024 del 25-29 de septiembre
                    </p>
                    <p className="text-lg md:text-xl mb-6 text-justify">
                        Mas info en: 
                        <a href="https://bit.ly/3YIujjL" className="text-blue-900 hover:underline">
                            https://bit.ly/3YIujjL
                        </a>
                    </p>

                </div>

                {/* Columna del slider de imágenes */}
                <div className="flex items-center justify-center">
                    <img src={img4} alt="ala" />
                </div>
            </div>
        </div>
    )

};

export default Panam;