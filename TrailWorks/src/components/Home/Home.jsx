import React from "react";
import motuldh from "../../img/motuldhv2.jpeg";
import panams from "../../img/panams.jpeg";
import panams2 from "../../img/mylaps.jpg"
import flow1 from "../../img/ecoflow/aviso1.jpeg";
import flow2 from "../../img/ecoflow/aviso1.jpeg";
import sumerecap from "../../img/sumrecap/sumrecap1.jpeg";
import sumerecap2 from "../../img/sumrecap/sumrecap2.jpeg";
import motul1 from "../../img/motul/resultadosopen.jpeg";
import motul2 from "../../img/motuldhv2.jpeg";
import { Link } from "react-router-dom";
import mana1 from "../../img/mauri/mana1.jpeg"
import mana2 from "../../img/mauri/mana2.jpeg"

const Home = () => {
    return (
        <div className="bg-gray-100">
            {/* Contenido Principal */}
            <main className="p-4 md:p-8 bg-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {/* Sección de Eventos */}
                    <section className="col-span-1 order-2 md:order-1">
                        <h2 className="text-3xl md:text-5xl text-center font-bold mb-4 text-black">EVENTOS</h2>
                        <div className="space-y-4">
                            <div className="bg-white shadow-lg rounded-lg p-3">
                                <Link to="/evento1">
                                    <img src={panams} alt="Downhill Championship" className="w-full h-64 md:h-80 object-cover mb-4" />
                                </Link>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-3">
                                <Link to="/evento2">
                                    <img src={motuldh} alt="Motul Pro Downhill" className="w-full h-64 md:h-80 object-cover mb-4" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Sección de Noticias */}
                    <section className="col-span-1 md:col-span-2 order-1 md:order-2">
                        <h2 className="text-3xl md:text-5xl text-center font-bold mb-4 text-black">NOTICIAS</h2>
                        <div className="space-y-8">
                            <div className="bg-white shadow-lg rounded-lg p-4">
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl text-gray-700">Clasificacion Panamericanos 2024 GRUPO B</h3>
                                        <p className="text-sm mb-4 md:mb-10 text-gray-600 mt-2">27/09/24</p>
                                        <Link to="/novedad1" className="text-blue-500 hover:underline">Leer más</Link>
                                    </div>
                                    <div className="flex flex-wrap justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                                    <img src={panams} alt="Trabajos recientes" className="w-full h-48 object-cover md:w-48 md:h-32" />
                                    <img src={panams2} alt="Trabajos recientes" className="w-full h-44 object-fit md:w-56 md:h-32" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white shadow-lg rounded-lg p-4">
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl text-gray-700">STARTSLIST: 2024 DHI PANAMERICAN CHAMPIONSHIPS - GROUP A & B</h3>
                                        <p className="text-sm mb-4 md:mb-10 text-gray-600 mt-2">22/09/24</p>
                                        <Link to="/novedad2" className="text-blue-500 hover:underline">Leer más</Link>
                                    </div>
                                    <div className="flex flex-wrap justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                                        <img src={panams} alt="Trabajos recientes" className="w-full h-48 object-cover md:w-48 md:h-32" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white shadow-lg rounded-lg p-4">
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl text-gray-700">Mariana Salazar regresa a El Salvador!</h3>
                                        <p className="text-sm mb-4 md:mb-10 text-gray-600 mt-2">16/09/24</p>
                                        <Link to="/novedad3" className="text-blue-500 hover:underline">Leer más</Link>
                                    </div>
                                    <div className="flex flex-wrap justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                                        <img src={mana1} alt="Trabajos recientes" className="w-full h-48 object-cover md:w-48 md:h-32" />
                                        <img src={mana2} alt="Trabajos recientes" className="w-full h-48 object-cover md:w-48 md:h-32" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white shadow-lg rounded-lg p-4">
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl text-gray-700">Resultados El Salvador Open.</h3>
                                        <p className="text-sm mb-4 md:mb-10 text-gray-600 mt-2">16/09/24</p>
                                        <Link to="/novedad4" className="text-blue-500 hover:underline">Leer más</Link>
                                    </div>
                                    <div className="flex flex-wrap justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                                        <img src={motul1} alt="Trabajos recientes" className="w-full h-48 object-cover md:w-48 md:h-32" />
                                        <img src={motul2} alt="Trabajos recientes" className="w-full h-48 object-cover md:w-48 md:h-32" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Home;
