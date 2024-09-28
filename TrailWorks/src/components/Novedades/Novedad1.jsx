import React, { useEffect } from 'react';
import ImgSlider from '../ImgSlider';  // Importa tu componente ImgSlider
import img1 from '../../img/panams.jpeg';  // Ejemplo de importación de imágenes

const Novedad1 = () => {
    const images = [img1];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gradient-to-r from-gray-600 via-gray-400 to-white min-h-screen p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Columna del texto */}
                <div className="flex flex-col">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center md:text-left text-gray-800">Clasificacion Panamericanos 2024</h1>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center md:text-left text-black'>GRUPO B CADETE</h2>

                     {/* Tabla responsive */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border border-gray-400">Pos</th>
                                <th className="px-4 py-2 border border-gray-400">Atleta</th>
                                <th className="px-4 py-2 border border-gray-400">Edad</th>
                                <th className="px-4 py-2 border border-gray-400">País</th>
                                <th className="px-4 py-2 border border-gray-400">Tiempo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { pos: 1, atleta: "Sebastian Angulo", edad: 13, pais: "Venezuela", tiempo: "0:03:02.143" },
                                { pos: 2, atleta: "Jeronimo Londono", edad: 14, pais: "Colombia", tiempo: "0:03:05.867" },
                                { pos: 3, atleta: "Simón Beltran", edad: 14, pais: "Colombia", tiempo: "0:03:09.566" },
                                { pos: 4, atleta: "Sebastian López", edad: 13, pais: "Costa Rica", tiempo: "0:03:27.232" },
                                { pos: 5, atleta: "Jose Matias Morales", edad: 14, pais: "Guatemala", tiempo: "0:03:32.645" },
                                { pos: 6, atleta: "Jesus Baños", edad: 14, pais: "Guatemala", tiempo: "0:03:48.887" },
                                { pos: 7, atleta: "Diego Martinelli", edad: 14, pais: "Panamá", tiempo: "0:03:59.475" },
                                { pos: 8, atleta: "Santiago Mencos Rios", edad: 14, pais: "Guatemala", tiempo: "0:04:06.374" },
                                { pos: 9, atleta: "Tomás Ortiz Sherman", edad: 14, pais: "Guatemala", tiempo: "0:04:10.652" },
                                { pos: 10, atleta: "Mario Mossi Handal", edad: 14, pais: "Honduras", tiempo: "0:04:21.881" },
                                { pos: 11, atleta: "Lucas Vergara Alcaino", edad: 14, pais: "Chile", tiempo: "0:04:28.424" },
                                { pos: 12, atleta: "Matias Rodriguez", edad: 12, pais: "Colombia", tiempo: "0:04:40.520" },
                                { pos: 13, atleta: "Paolo Giammattei", edad: 14, pais: "El Salvador", tiempo: "0:04:46.571" },
                                { pos: 14, atleta: "Moshe Pinillo", edad: 12, pais: "Panamá", tiempo: "0:04:49.846" },
                                { pos: 15, atleta: "Lukas Niklitschek", edad: 13, pais: "Chile", tiempo: "0:05:23.788" },
                                { pos: 16, atleta: "Piero Ianuzzelli", edad: 12, pais: "El Salvador", tiempo: "0:06:04.780" },
                                { pos: 17, atleta: "Rodrigo Bermejo", edad: 13, pais: "Guatemala", tiempo: "0:06:54.800" },
                                { pos: 18, atleta: "Benjamin Ramirez", edad: 10, pais: "Guatemala", tiempo: "0:07:02.191" },
                                { pos: 19, atleta: "Gabriel Pavan Dandolini", edad: 14, pais: "Brasil", tiempo: "" },
                                { pos: 20, atleta: "Martin Niklitschek", edad: 11, pais: "Chile", tiempo: "" },
                                { pos: 21, atleta: "Sebastian Magaña", edad: 13, pais: "México", tiempo: "" }
                            ].map((competitor, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pos}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.atleta}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.edad}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pais}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.tiempo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 className='text-3xl md:text-4xl font-bold mb-4 mt-4 text-center md:text-left text-black'>GRUPO B CADETE FEMENINO</h2>

                     {/* Tabla responsive */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border border-gray-400">Pos</th>
                                <th className="px-4 py-2 border border-gray-400">Atleta</th>
                                <th className="px-4 py-2 border border-gray-400">Edad</th>
                                <th className="px-4 py-2 border border-gray-400">País</th>
                                <th className="px-4 py-2 border border-gray-400">Tiempo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { pos: 1, atleta: "Danika Gaitán", edad: 14, pais: "Guatemala", tiempo: "0:04:10.121" },
                                { pos: 2, atleta: "Camila Rios", edad: 14, pais: "Colombia", tiempo: "0:06:08.974" }
                            ].map((competitor, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pos}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.atleta}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.edad}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pais}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.tiempo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 className='text-3xl md:text-4xl font-bold mb-4 mt-4 text-center md:text-left text-black'>GRUPO B MASTER B1</h2>

                     {/* Tabla responsive */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border border-gray-400">Pos</th>
                                <th className="px-4 py-2 border border-gray-400">Atleta</th>
                                <th className="px-4 py-2 border border-gray-400">Edad</th>
                                <th className="px-4 py-2 border border-gray-400">País</th>
                                <th className="px-4 py-2 border border-gray-400">Tiempo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                 { pos: 1, atleta: "Álvaro Hidalgo Vásquez", edad: 40, pais: "Costa Rica", tiempo: "0:02:51.107" },
                                 { pos: 2, atleta: "Jorge Jaramillo", edad: 42, pais: "Colombia", tiempo: "0:02:57.651" },
                                 { pos: 3, atleta: "Hugo Martínez", edad: 40, pais: "Guatemala", tiempo: "0:02:59.346" },
                                 { pos: 4, atleta: "Wilmar Rios", edad: 41, pais: "Colombia", tiempo: "0:03:04.878" },
                                 { pos: 5, atleta: "Kenneth José Zamora Anderson", edad: 41, pais: "Guatemala", tiempo: "0:03:14.621" },
                                 { pos: 6, atleta: "Eugenio Sebastián Tamariz Ochoa", edad: 42, pais: "Ecuador", tiempo: "0:03:19.077" },
                                 { pos: 7, atleta: "Enrique Artavia Cedeno", edad: 40, pais: "Costa Rica", tiempo: "0:03:32.860" },
                                 { pos: 8, atleta: "Douglas Martínez", edad: 40, pais: "Guatemala", tiempo: "0:03:34.984" },
                                 { pos: 9, atleta: "Juan David Vélez Alzate", edad: 44, pais: "Costa Rica", tiempo: "0:03:48.887" },
                                 { pos: 10, atleta: "Rodrigo De La Borbolla", edad: 41, pais: "México", tiempo: "0:03:50.001" },
                                 { pos: 11, atleta: "Deivis Steffens Ospina Rios", edad: 41, pais: "Guatemala", tiempo: "0:03:52.411" },
                                 { pos: 12, atleta: "Carlos Alberto Alfonso", edad: 44, pais: "México", tiempo: "0:03:57.834" },
                                 { pos: 13, atleta: "Carlos Romero", edad: 44, pais: "México", tiempo: "0:04:36.580" },
                                 { pos: 14, atleta: "Rafael Rodríguez Raudales", edad: 45, pais: "Honduras", tiempo: "" }
                            ].map((competitor, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pos}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.atleta}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.edad}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pais}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.tiempo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 className='text-3xl md:text-4xl font-bold mb-4 mt-4 text-center md:text-left text-black'>GRUPO B MASTER B2</h2>

                     {/* Tabla responsive */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border border-gray-400">Pos</th>
                                <th className="px-4 py-2 border border-gray-400">Atleta</th>
                                <th className="px-4 py-2 border border-gray-400">Edad</th>
                                <th className="px-4 py-2 border border-gray-400">País</th>
                                <th className="px-4 py-2 border border-gray-400">Tiempo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                 { pos: 1, atleta: "Palestina Eduardo", edad: 48, pais: "México", tiempo: "0:03:31.531" },
                                 { pos: 2, atleta: "Julio Fernandez", edad: 49, pais: "México", tiempo: "0:03:31.729" },
                                 { pos: 3, atleta: "Roberto Alexi Melendez", edad: 49, pais: "El Salvador", tiempo: "0:03:39.559" },
                                 { pos: 4, atleta: "Carlos Niklitschek", edad: 47, pais: "Chile", tiempo: "0:03:49.457" },
                                 { pos: 5, atleta: "José Luis Mercado Segovia", edad: 47, pais: "Bolivia", tiempo: "0:04:45.115" },
                                 { pos: 6, atleta: "Javier Chavez", edad: 47, pais: "El Salvador", tiempo: "0:04:59.721" },
                                 { pos: 7, atleta: "Renato Correa Santorio", edad: 48, pais: "Brasil", tiempo: "" }
                            ].map((competitor, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pos}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.atleta}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.edad}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pais}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.tiempo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 className='text-3xl md:text-4xl font-bold mb-4 mt-4 text-center md:text-left text-black'>GRUPO B MASTER C1</h2>

                     {/* Tabla responsive */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border border-gray-400">Pos</th>
                                <th className="px-4 py-2 border border-gray-400">Atleta</th>
                                <th className="px-4 py-2 border border-gray-400">Edad</th>
                                <th className="px-4 py-2 border border-gray-400">País</th>
                                <th className="px-4 py-2 border border-gray-400">Tiempo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                 { pos: 1, atleta: "Marcos Antonio Lira", edad: 54, pais: "Brasil", tiempo: "0:03:12.571" },
                                 { pos: 2, atleta: "José Morales Zuger", edad: 50, pais: "Guatemala", tiempo: "0:03:21.744" },
                                 { pos: 3, atleta: "Claudemir Fodi", edad: 50, pais: "Brasil", tiempo: "0:03:26.652" },
                                 { pos: 4, atleta: "Mario Mossi Reyes", edad: 50, pais: "Honduras", tiempo: "0:03:35.601" },
                                 { pos: 5, atleta: "José Pineda", edad: 53, pais: "Colombia", tiempo: "0:03:51.613" },
                                 { pos: 6, atleta: "Cesar Otero", edad: 52, pais: "Colombia", tiempo: "0:04:30.587" },
                                 { pos: 7, atleta: "German Holgin", edad: 53, pais: "Colombia", tiempo: "" }
                            ].map((competitor, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pos}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.atleta}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.edad}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pais}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.tiempo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 className='text-3xl md:text-4xl font-bold mb-4 mt-4 text-center md:text-left text-black'>GRUPO B MASTER C2</h2>

                     {/* Tabla responsive */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border border-gray-400">Pos</th>
                                <th className="px-4 py-2 border border-gray-400">Atleta</th>
                                <th className="px-4 py-2 border border-gray-400">Edad</th>
                                <th className="px-4 py-2 border border-gray-400">País</th>
                                <th className="px-4 py-2 border border-gray-400">Tiempo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                 { pos: 1, atleta: "Humberto Jaquez Hilarios", edad: 59, pais: "Mexico", tiempo: "0:04:39.879"}
                            ].map((competitor, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pos}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.atleta}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.edad}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pais}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.tiempo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 className='text-3xl md:text-4xl font-bold mb-4 mt-4 text-center md:text-left text-black'>GRUPO B MASTER B1</h2>

                     {/* Tabla responsive */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border border-gray-400">Pos</th>
                                <th className="px-4 py-2 border border-gray-400">Atleta</th>
                                <th className="px-4 py-2 border border-gray-400">Edad</th>
                                <th className="px-4 py-2 border border-gray-400">País</th>
                                <th className="px-4 py-2 border border-gray-400">Tiempo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                 { pos: 1, atleta: "Roger Marroquin ", edad: 41, pais: "El Salvador", tiempo: "" },
                            ].map((competitor, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pos}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.atleta}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.edad}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pais}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.tiempo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                 <h2 className='text-3xl md:text-4xl font-bold mb-4 mt-4 text-center md:text-left text-black'>GRUPO B OPEN</h2>

                     {/* Tabla responsive */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border border-gray-400">Pos</th>
                                <th className="px-4 py-2 border border-gray-400">Atleta</th>
                                <th className="px-4 py-2 border border-gray-400">Edad</th>
                                <th className="px-4 py-2 border border-gray-400">País</th>
                                <th className="px-4 py-2 border border-gray-400">Tiempo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { pos: 1, atleta: "Adrián Oswaldo Garnica Paredes", edad: 19, pais: "Ecuador", tiempo: "0:02:59.357" },
                                { pos: 2, atleta: "Rayne Ramirez Gomez", edad: 26, pais: "República Dominicana", tiempo: "0:03:03.254" },
                                { pos: 3, atleta: "Emmanuel Eloisa", edad: 19, pais: "México", tiempo: "0:03:05.546" },
                                { pos: 4, atleta: "Nehemias Araya Tabilo", edad: 26, pais: "Chile", tiempo: "0:03:12.080" },
                                { pos: 5, atleta: "Ronald Lebel Gaete", edad: 29, pais: "Chile", tiempo: "0:03:15.269" },
                                { pos: 6, atleta: "Uriel Gonzalez", edad: 25, pais: "México", tiempo: "0:03:26.932" },
                                { pos: 7, atleta: "Cristoffer Fica", edad: 28, pais: "Chile", tiempo: "0:03:29.305" },
                                { pos: 8, atleta: "Nicolas Rozas Rali", edad: 26, pais: "Chile", tiempo: "0:03:32.752" },
                                { pos: 9, atleta: "Matías Sebastián Villavicencio Alvarado", edad: 20, pais: "Ecuador", tiempo: "0:03:32.783" },
                                { pos: 10, atleta: "Guillermo Orantes", edad: 32, pais: "Guatemala", tiempo: "0:03:33.890" },
                                { pos: 11, atleta: "Bastian Nicolas Valdivia Rojas", edad: 28, pais: "Chile", tiempo: "0:03:58.639" },
                                { pos: 12, atleta: "Dhyano Weiss", edad: 24, pais: "Brasil", tiempo: "0:04:03.637" },
                                { pos: 13, atleta: "Erick Adrian Carranza Gil", edad: 25, pais: "Guatemala", tiempo: "0:04:21.312" },
                                { pos: 14, atleta: "Dylan Guerra Mendoza", edad: 26, pais: "Guatemala", tiempo: "0:04:52.929" },
                                { pos: 15, atleta: "Manuel Peña", edad: 29, pais: "El Salvador", tiempo: "0:04:53.469" },
                                { pos: 16, atleta: "Carlos Choto", edad: 25, pais: "El Salvador", tiempo: "0:05:05.553" },
                                { pos: 17, atleta: "Carlos Jair Gullins", edad: 21, pais: "México", tiempo: "0:05:11.095" },
                                { pos: 18, atleta: "Andres Lozada", edad: 20, pais: "México", tiempo: "0:05:58.036" },
                                { pos: 19, atleta: "Rodrigo Argueta", edad: 39, pais: "El Salvador", tiempo: "0:07:42.641" },
                                { pos: 20, atleta: "Guillermo Andres Argueta", edad: 25, pais: "Honduras", tiempo: "0:07:57.916" },
                                { pos: 21, atleta: "Carlos Albanez", edad: 27, pais: "El Salvador", tiempo: "0:10:15.669" },
                                { pos: 22, atleta: "Daniel Flores", edad: 22, pais: "El Salvador", tiempo: "0:11:20.650" },
                                { pos: 23, atleta: "Julio Jose Cantero Sevilla", edad: 36, pais: "Honduras", tiempo: "" }
                            ].map((competitor, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pos}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.atleta}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.edad}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pais}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.tiempo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 className='text-3xl md:text-4xl font-bold mb-4 mt-4 text-center md:text-left text-black'>GRUPO B PRE JUVENIL</h2>

                     {/* Tabla responsive */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border border-gray-400">Pos</th>
                                <th className="px-4 py-2 border border-gray-400">Atleta</th>
                                <th className="px-4 py-2 border border-gray-400">Edad</th>
                                <th className="px-4 py-2 border border-gray-400">País</th>
                                <th className="px-4 py-2 border border-gray-400">Tiempo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { pos: 1, atleta: "Christopher Silva", edad: 15, pais: "Colombia", tiempo: "0:02:45.638" },
                                { pos: 2, atleta: "Santiago Arenas", edad: 16, pais: "Costa Rica", tiempo: "0:02:52.917" },
                                { pos: 3, atleta: "Yahir Rodriguez Hidalgo", edad: 16, pais: "Ecuador", tiempo: "0:02:58.315" },
                                { pos: 4, atleta: "Leonardo Camargo Dos Passos", edad: 16, pais: "Brasil", tiempo: "0:03:05.537" },
                                { pos: 5, atleta: "Leo Scheneppen", edad: 16, pais: "Costa Rica", tiempo: "0:03:08.285" },
                                { pos: 6, atleta: "Christopher Uriel Arechiga", edad: 16, pais: "México", tiempo: "0:03:19.321" },
                                { pos: 7, atleta: "Alexis Rivera", edad: 16, pais: "México", tiempo: "0:03:28.297" },
                                { pos: 8, atleta: "Theo Scheneppen", edad: 15, pais: "Costa Rica", tiempo: "0:03:29.047" },
                                { pos: 9, atleta: "Juan Diego Rodriguez", edad: 15, pais: "Guatemala", tiempo: "0:03:33.958" },
                                { pos: 10, atleta: "Konrad Fischel Aason", edad: 16, pais: "Costa Rica", tiempo: "0:03:39.558" },
                                { pos: 11, atleta: "Jorge Birbragher", edad: 15, pais: "Panamá", tiempo: "0:03:51.692" },
                                { pos: 12, atleta: "Andre Monterroza", edad: 16, pais: "El Salvador", tiempo: "0:03:58.647" },
                                { pos: 13, atleta: "Marcos Suorverville", edad: 15, pais: "México", tiempo: "0:04:05.782" },
                                { pos: 14, atleta: "Andres de la Cerda Cofino", edad: 15, pais: "Guatemala", tiempo: "0:04:09.185" },
                                { pos: 15, atleta: "Cesareo Frias", edad: 15, pais: "México", tiempo: "0:04:17.992" },
                                { pos: 16, atleta: "Raul Estrada", edad: 14, pais: "México", tiempo: "0:04:35.410" },
                                { pos: 17, atleta: "Gianluca Melloni Rosales", edad: 15, pais: "Perú", tiempo: "0:04:39.743" },
                                { pos: 18, atleta: "Isaac Guzman", edad: 15, pais: "El Salvador", tiempo: "0:06:38.120" },
                                { pos: 19, atleta: "Gabriel Cohen", edad: 16, pais: "El Salvador", tiempo: "" },
                                { pos: 20, atleta: "Rodrigo Del Aguila Talavera", edad: 16, pais: "Perú", tiempo: "" }
                            ].map((competitor, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pos}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.atleta}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.edad}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pais}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.tiempo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 className='text-3xl md:text-4xl font-bold mb-4 mt-4 text-center md:text-left text-black'>GRUPO B PRE JUVENIL FEMENINO</h2>

                     {/* Tabla responsive */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 border border-gray-400">Pos</th>
                                <th className="px-4 py-2 border border-gray-400">Atleta</th>
                                <th className="px-4 py-2 border border-gray-400">Edad</th>
                                <th className="px-4 py-2 border border-gray-400">País</th>
                                <th className="px-4 py-2 border border-gray-400">Tiempo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                 { pos: 1, atleta: "Ximena Magaña", edad: 16, pais: "México", tiempo: "0:03:57.429" },
                                 { pos: 2, atleta: "Luciana Polania", edad: 16, pais: "Colombia", tiempo: "0:04:05.238" },
                                 { pos: 3, atleta: "Annika Bruns", edad: 15, pais: "Guatemala", tiempo: "0:06:21.827" }
                            ].map((competitor, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pos}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.atleta}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.edad}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.pais}</td>
                                    <td className="border border-gray-400 px-4 py-2">{competitor.tiempo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                </div>
                </div>
                </div>
    );
};

export default Novedad1;

  