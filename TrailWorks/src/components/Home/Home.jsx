import React from "react";
import motuldh from "../../img/motuldhv2.jpeg";
import panams from "../../img/panams.jpeg";
import prueba from "../../img/prueba.jpeg";
import prueba2 from "../../img/prueba2.jpeg";
import flow1 from "../../img/ecoflow/flow1.jpeg"
import flow2 from "../../img/ecoflow/flow2.jpeg"
import sumerecap from "../../img/sumrecap/sumrecap1.jpeg"
import sumerecap2 from "../../img/sumrecap/sumrecap2.jpeg"
import motul1 from "../../img/motul/motulfecha3.jpeg"
import motul2 from "../../img/motuldhv2.jpeg"
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="bg-gray-100">
            {/* Contenido Principal */}
            <main className="p-4 md:p-8 bg-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {/* Sección de Eventos */}
                    <section className="col-span-1">
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

                    {/* Sección de Novedades */}
                    <section className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl md:text-5xl text-center font-bold mb-4 text-black">NOVEDADES</h2>
    
                        <div className="space-y-8">

                        <div className="bg-white shadow-lg rounded-lg p-4">
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl text-gray-700">Motul Pro DH Series El Salvador Fecha 3!</h3>
                                        <p className="text-sm mb-4 md:mb-10 text-gray-600 mt-2">12/08/24</p>
                                        <Link to="/novedad4" className="text-blue-500 hover:underline">Leer más</Link>
                                    </div>
                                    <div className="flex flex-wrap justify-center space-x-4">
                                        <img src={motul1} alt="Trabajos recientes" className="w-48 h-32 md:w-48 md:h-32 object-cover" />
                                        <img src={motul2} alt="Trabajos recientes" className="w-48 h-32 md:w-48 md:h-32 object-cover" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white shadow-lg rounded-lg p-4">
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl text-gray-700">EcoProject Class by Mauricio Castaneda</h3>
                                        <p className="text-sm mb-4 md:mb-10 text-gray-600 mt-2">03/08/24</p>
                                        <Link to="/novedad1" className="text-blue-500 hover:underline">Leer más</Link>
                                    </div>
                                    <div className="flex flex-wrap justify-center space-x-4">
                                        <img src={prueba} alt="Trabajos recientes" className="w-48 h-32 md:w-48 md:h-32 object-cover" />
                                        <img src={prueba2} alt="Trabajos recientes" className="w-48 h-32 md:w-48 md:h-32 object-cover" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white shadow-lg rounded-lg p-4">
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl text-gray-700">Follow Up - Proyecto EcoFlow</h3>
                                        <p className="text-sm mb-4 md:mb-10 text-gray-600 mt-2">02/08/24</p>
                                        <Link to="/novedad2" className="text-blue-500 hover:underline">Leer más</Link>
                                    </div>
                                    <div className="flex flex-wrap justify-center space-x-4">
                                        <img src={flow1} alt="Trabajos recientes" className="w-48 h-32 md:w-48 md:h-32 object-cover" />
                                        <img src={flow2} alt="Trabajos recientes" className="w-48 h-32 md:w-48 md:h-32 object-cover" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white shadow-lg rounded-lg p-4">
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl text-gray-700">Summer Camp "TrailWorks Pro Academy" 2024 - Photo Recap</h3>
                                        <p className="text-sm mb-4 md:mb-10 text-gray-600 mt-2">2/08/24</p>
                                        <Link to="/novedad3" className="text-blue-500 hover:underline">Leer más</Link>
                                    </div>
                                    <div className="flex flex-wrap justify-center space-x-4">
                                        <img src={sumerecap} alt="Trabajos recientes" className="w-48 h-32 md:w-48 md:h-32 object-cover" />
                                        <img src={sumerecap2} alt="Trabajos recientes" className="w-48 h-32 md:w-48 md:h-32 object-cover" />
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