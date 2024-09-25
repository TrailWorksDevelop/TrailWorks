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
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center md:text-left text-gray-800">STARTLIST DH PANAMERICAN CHAMPIONSHIP 2024</h1>
                    <h2 className='text-3xl md:text-4xl font-semibold mb-4 text-center md:text-left text-gray-700'>GRUPO A</h2>

                    {/* Tabla con la información */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-left border-collapse border border-gray-400">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 border border-gray-400">Nombres</th>
                                    <th className="px-4 py-2 border border-gray-400">Apellidos</th>
                                    <th className="px-4 py-2 border border-gray-400">Categoría</th>
                                    <th className="px-4 py-2 border border-gray-400">Nacionalidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Aquí van las filas de la tabla */}
                                {[
                                    { nombre: "Valentina", apellido: "Roa", categoria: "Elite Femenino", nacionalidad: "Colombia" },
                                    { nombre: "Mariana", apellido: "Salazar Palomo", categoria: "Elite Femenino", nacionalidad: "El Salvador" },
                                    { nombre: "Mariajose", apellido: "Montoya Talavera", categoria: "Elite Femenino", nacionalidad: "Honduras" },
                                    { nombre: "Camila", apellido: "Aguilar", categoria: "Elite Femenino", nacionalidad: "México" },
                                    { nombre: "Rosa Libertad", apellido: "Cruz Tica", categoria: "Elite Femenino", nacionalidad: "Perú" },
                                    { nombre: "Carla Sofia", apellido: "Arrue Bermeo", categoria: "Elite Femenino", nacionalidad: "Perú" },
                                    { nombre: "Juan", apellido: "Muñoz", categoria: "Elite Masculino", nacionalidad: "Colombia" },
                                    { nombre: "Sebastian", apellido: "Holguin", categoria: "Elite Masculino", nacionalidad: "Colombia" },
                                    { nombre: "Brener Antenor", apellido: "Montes Tolentino", categoria: "Elite Masculino", nacionalidad: "Perú" },
                                    { nombre: "Tyler", apellido: "Ervin", categoria: "Elite Masculino", nacionalidad: "USA" },
                                    { nombre: "Carlos Sebastian", apellido: "Alfaro Peralta", categoria: "Elite Masculino", nacionalidad: "Perú" },
                                    { nombre: "Steven", apellido: "Ceballos", categoria: "Elite Masculino", nacionalidad: "Colombia" },
                                    { nombre: "Rafael", apellido: "Gutierrez", categoria: "Elite Masculino", nacionalidad: "Colombia" },
                                    { nombre: "José", apellido: "Peña", categoria: "Elite Masculino", nacionalidad: "El Salvador" },
                                    { nombre: "Mateo", apellido: "Negri Ferreyros", categoria: "Elite Masculino", nacionalidad: "Perú" },
                                    { nombre: "Francisco", apellido: "Solaiza", categoria: "Elite Masculino", nacionalidad: "México" },
                                    { nombre: "Xavier", apellido: "Rodriguez Pommer", categoria: "Elite Masculino", nacionalidad: "Chile" },
                                    { nombre: "Alvaro", apellido: "O'Brien", categoria: "Elite Masculino", nacionalidad: "Chile" },
                                    { nombre: "Carlos Daniel", apellido: "Alcala Arriaran", categoria: "Elite Masculino", nacionalidad: "Perú" },
                                    { nombre: "Ian", apellido: "Rish Fodi", categoria: "Elite Masculino", nacionalidad: "Brasil" },
                                    { nombre: "Dhyano", apellido: "Weiss", categoria: "Elite Masculino", nacionalidad: "Brasil" },
                                    { nombre: "Federico", apellido: "Da Costa Vieira", categoria: "Elite Masculino", nacionalidad: "Brasil" },
                                    { nombre: "Colin", apellido: "McElyea", categoria: "Elite Masculino", nacionalidad: "USA" },
                                    { nombre: "Evan", apellido: "Medcalf", categoria: "Elite Masculino", nacionalidad: "USA" },
                                    { nombre: "Camilo", apellido: "Sanchez", categoria: "Elite Masculino", nacionalidad: "Colombia" },
                                    { nombre: "Abihu", apellido: "Hernandez", categoria: "Elite Masculino", nacionalidad: "México" },
                                    { nombre: "Braulio Santiago", apellido: "Vásquez Sánchez", categoria: "Elite Masculino", nacionalidad: "Ecuador" },
                                    { nombre: "Guillermo Andres", apellido: "Argueta", categoria: "Elite Masculino", nacionalidad: "Honduras" },
                                    { nombre: "Ricardo", apellido: "Segura", categoria: "Elite Masculino", nacionalidad: "Guatemala" },
                                    { nombre: "Manuel", apellido: "Flores", categoria: "Elite Masculino", nacionalidad: "Guatemala" },
                                    { nombre: "Emiliano", apellido: "Ramirez", categoria: "Elite Masculino", nacionalidad: "Guatemala" },
                                    { nombre: "Cristofher Robin", apellido: "Pérez", categoria: "Elite Masculino", nacionalidad: "Panamá" },
                                    { nombre: "Diego", apellido: "Gonzalez", categoria: "Elite Masculino", nacionalidad: "Venezuela" },
                                    { nombre: "Andre", apellido: "Valencia", categoria: "Elite Masculino", nacionalidad: "El Salvador" },
                                    { nombre: "Angel", apellido: "Ochoa", categoria: "Elite Masculino", nacionalidad: "Honduras" },
                                    { nombre: "Gabriel", apellido: "Segura Guevara", categoria: "Elite Masculino", nacionalidad: "Costa Rica" },
                                    { nombre: "Agustin Richard", apellido: "Forcade Cluzet", categoria: "Elite Masculino", nacionalidad: "Uruguay" },
                                    { nombre: "Fernanda", apellido: "Quiroga Huilcaman", categoria: "Junior Femenino", nacionalidad: "Chile" },
                                    { nombre: "Florencia", apellido: "Rodriguez", categoria: "Junior Femenino", nacionalidad: "Chile" },
                                    { nombre: "Pedro", apellido: "Abrigo", categoria: "Junior Masculino", nacionalidad: "Chile" },
                                    { nombre: "Juan Diego", apellido: "Alfaro Marroquin", categoria: "Junior Masculino", nacionalidad: "Perú" },
                                    { nombre: "Mariano", apellido: "Pancorvo Salmon", categoria: "Junior Masculino", nacionalidad: "Perú" },
                                    { nombre: "Vasco", apellido: "Vargas Cereghino", categoria: "Junior Masculino", nacionalidad: "Perú" },
                                    { nombre: "Salvador", apellido: "Ortiz Candia", categoria: "Junior Masculino", nacionalidad: "Perú" },
                                    { nombre: "Theo", apellido: "Natrielli Binari De Oliveira", categoria: "Junior Masculino", nacionalidad: "Brasil" },
                                    { nombre: "Noah", apellido: "Boshoff", categoria: "Junior Masculino", nacionalidad: "Costa Rica" },
                                    { nombre: "Juan José", apellido: "Jaramillo", categoria: "Junior Masculino", nacionalidad: "Colombia" },
                                    { nombre: "Matias", apellido: "Jaramillo", categoria: "Junior Masculino", nacionalidad: "Colombia" },
                                    { nombre: "Manuel", apellido: "González", categoria: "Junior Masculino", nacionalidad: "Colombia" },
                                    { nombre: "Joshua", apellido: "Hernandez Hope", categoria: "Junior Masculino", nacionalidad: "México" },
                                    { nombre: "Levi", apellido: "Felix", categoria: "Junior Masculino", nacionalidad: "México" },
                                    { nombre: "Farid", apellido: "Flores", categoria: "Junior Masculino", nacionalidad: "México" },
                                    { nombre: "Dali", apellido: "Alonso", categoria: "Junior Masculino", nacionalidad: "México" },
                                    { nombre: "Kaito", apellido: "Roldan", categoria: "Junior Masculino", nacionalidad: "México" },
                                    { nombre: "Alex Gabriel", apellido: "Sarmiento Pérez", categoria: "Junior Masculino", nacionalidad: "Ecuador" },
                                    { nombre: "César David", apellido: "Gallegos Chávez", categoria: "Junior Masculino", nacionalidad: "Ecuador" },
                                    { nombre: "Christopher Alexander", apellido: "Barrera Lazo", categoria: "Junior Masculino", nacionalidad: "Ecuador" },
                                    { nombre: "Byron Ariel", apellido: "Teran Gallegos", categoria: "Junior Masculino", nacionalidad: "Ecuador" },
                                    { nombre: "Anthony", apellido: "Ruiz", categoria: "Junior Masculino", nacionalidad: "Venezuela" },
                                    { nombre: "Diego", apellido: "Dal Maso", categoria: "Junior Masculino", nacionalidad: "Venezuela" },
                                    { nombre: "Paolo", apellido: "Ianuzzelli", categoria: "Junior Masculino", nacionalidad: "El Salvador" },
                                    { nombre: "José Alejandro", apellido: "Herrera Dominguez", categoria: "Junior Masculino", nacionalidad: "El Salvador" },
                                    { nombre: "Benny", apellido: "De Vall", categoria: "Junior Masculino", nacionalidad: "Canadá" },
                                    { nombre: "Manuel", apellido: "Gamboa Fernandois", categoria: "Master A1", nacionalidad: "Chile" },
                                    { nombre: "Sebastian", apellido: "Ardila", categoria: "Master A1", nacionalidad: "Colombia" },
                                    { nombre: "Abraham", apellido: "Lemus", categoria: "Master A1", nacionalidad: "México" },
                                    { nombre: "Manuel Abraham", apellido: "Lemus Sagrero", categoria: "Master A1", nacionalidad: "México" },
                                    { nombre: "Carlos", apellido: "Teran", categoria: "Master A1", nacionalidad: "Venezuela" },
                                    { nombre: "José", apellido: "Jiménez", categoria: "Master A1", nacionalidad: "El Salvador" },
                                    { nombre: "Manuel", apellido: "Castellanos", categoria: "Master A1", nacionalidad: "El Salvador" },
                                    { nombre: "Antonio", apellido: "Martinez", categoria: "Master A1", nacionalidad: "Guatemala" },
                                    { nombre: "Jorge", apellido: "Monzon", categoria: "Master A2", nacionalidad: "Chile" },
                                    { nombre: "Volkmar Gustav", apellido: "Berchtold Filho", categoria: "Master A2", nacionalidad: "Brasil" },
                                    { nombre: "Oscar", apellido: "Rodriguez", categoria: "Master A2", nacionalidad: "Colombia" },
                                    { nombre: "Leo", apellido: "Jimenez Orozco", categoria: "Master A2", nacionalidad: "México" },
                                    { nombre: "Josephe Leo", apellido: "Jiménez Roa", categoria: "Master A2", nacionalidad: "México" },
                                    { nombre: "Darwin Israel", apellido: "Miranda Chiliquinga", categoria: "Master A2", nacionalidad: "Ecuador" },
                                    { nombre: "Julio Jose", apellido: "Cantero Sevilla", categoria: "Master A2", nacionalidad: "Honduras" },
                                    { nombre: "Juan Carlos", apellido: "Linares Navarro", categoria: "Master A2", nacionalidad: "Guatemala" },
                                    { nombre: "Mauricio", apellido: "Castaneda", categoria: "Master A2", nacionalidad: "El Salvador" },
                                    { nombre: "Marvin", apellido: "Spiegler", categoria: "Master A2", nacionalidad: "Guatemala" },
                                    { nombre: "Rodrigo", apellido: "Argueta", categoria: "Master A2", nacionalidad: "El Salvador" }
                                ].map((competitor, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border px-4 py-2">{competitor.nombre}</td>
                                        <td className="border px-4 py-2">{competitor.apellido}</td>
                                        <td className="border px-4 py-2">{competitor.categoria}</td>
                                        <td className="border px-4 py-2">{competitor.nacionalidad}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex flex-col pt-12 md:pt-36">
                    <h2 className='text-3xl md:text-4xl font-semibold mb-4 text-center md:text-left text-gray-700'>GRUPO B</h2>

                    {/* Tabla con la información del Grupo B */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-left border-collapse border border-gray-400">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 border border-gray-400">Nombres</th>
                                    <th className="px-4 py-2 border border-gray-400">Apellidos</th>
                                    <th className="px-4 py-2 border border-gray-400">Categoría</th>
                                    <th className="px-4 py-2 border border-gray-400">Nacionalidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Aquí van las filas de la tabla del Grupo B */}
                                {[
                                    { nombre: "Lukas", apellido: "Niklitschek", categoria: "Cadete", nacionalidad: "CHILE" },
                                    { nombre: "Martin", apellido: "Niklitschek", categoria: "Cadete", nacionalidad: "CHILE" },
                                    { nombre: "Lucas", apellido: "Vergara Alcaino", categoria: "Cadete", nacionalidad: "CHILE" },
                                    { nombre: "Gabriel", apellido: "PAVAN DANDOLINI", categoria: "Cadete", nacionalidad: "BRASIL" },
                                    { nombre: "Sebastian", apellido: "López", categoria: "Cadete", nacionalidad: "COSTA RICA" },
                                    { nombre: "SIMÓN", apellido: "BELTRAN", categoria: "Cadete", nacionalidad: "COLOMBIA" },
                                    { nombre: "CAMILA", apellido: "RIOS", categoria: "Cadete", nacionalidad: "COLOMBIA" },
                                    { nombre: "MATIAS", apellido: "RODRIGUEZ", categoria: "Cadete", nacionalidad: "COLOMBIA" },
                                    { nombre: "SEBASTIAN", apellido: "MAGAÑA", categoria: "Cadete", nacionalidad: "MÉXICO" },
                                    { nombre: "Mario", apellido: "Mossi Handal", categoria: "Cadete", nacionalidad: "HONDURAS" },
                                    { nombre: "DANIKA", apellido: "GAITÁN", categoria: "Cadete", nacionalidad: "GUATEMALA" },
                                    { nombre: "SANTIAGO", apellido: "MENCOS RIOS", categoria: "Cadete", nacionalidad: "GUATEMALA" },
                                    { nombre: "BENJAMIN", apellido: "RAMIREZ", categoria: "Cadete", nacionalidad: "GUATEMALA" },
                                    { nombre: "TOMÁS", apellido: "ORTIZSHERMAN", categoria: "Cadete", nacionalidad: "GUATEMALA" },
                                    { nombre: "RODRIGO", apellido: "BERMEJO", categoria: "Cadete", nacionalidad: "GUATEMALA" },
                                    { nombre: "ANNIKA", apellido: "BRUNS", categoria: "Cadete", nacionalidad: "GUATEMALA" },
                                    { nombre: "Jesus", apellido: "BAÑOS", categoria: "Cadete", nacionalidad: "GUATEMALA" },
                                    { nombre: "Moshe", apellido: "Pinillo", categoria: "Cadete", nacionalidad: "PANAMÁ" },
                                    { nombre: "DIEGO", apellido: "MARTINELLI", categoria: "Cadete", nacionalidad: "PANAMÁ" },
                                    { nombre: "Sebastian", apellido: "Angulo", categoria: "Cadete", nacionalidad: "VENEZUELA" },
                                    { nombre: "Paolo", apellido: "Giammattei", categoria: "Cadete", nacionalidad: "EL SALVADOR" },
                                    { nombre: "Piero", apellido: "Ianuzzelli", categoria: "Cadete", nacionalidad: "EL SALVADOR" },
                                    { nombre: "Jose Matias", apellido: "Morales", categoria: "Cadete", nacionalidad: "GUATEMALA" },
                                    { nombre: "Daniela", apellido: "Sosa", categoria: "Cadete", nacionalidad: "GUATEMALA" },
                                    { nombre: "Enrique", apellido: "Artavia Cedeno", categoria: "MASTER B1", nacionalidad: "COSTA RICA" },
                                    { nombre: "Álvaro", apellido: "Hidalgo Vásquez", categoria: "MASTER B1", nacionalidad: "COSTA RICA" },
                                    { nombre: "WILMAR", apellido: "RIOS", categoria: "MASTER B1", nacionalidad: "COLOMBIA" },
                                    { nombre: "JORGE", apellido: "JARAMILLO", categoria: "MASTER B1", nacionalidad: "COLOMBIA" },
                                    { nombre: "CARLOS", apellido: "ROMERO", categoria: "MASTER B1", nacionalidad: "MÉXICO" },
                                    { nombre: "RODRIGO", apellido: "DE LA BORBOLLA", categoria: "MASTER B1", nacionalidad: "MÉXICO" },
                                    { nombre: "CARLOS ALBERTO", apellido: "ALFONSO", categoria: "MASTER B1", nacionalidad: "MÉXICO" },
                                    { nombre: "Eugenio Sebastián", apellido: "Tamariz Ochoa", categoria: "MASTER B1", nacionalidad: "ECUADOR" },
                                    { nombre: "Rafael", apellido: "Rodríguez Raudales", categoria: "MASTER B1", nacionalidad: "HONDURAS" },
                                    { nombre: "DOUGLAS", apellido: "MARTÍNEZ", categoria: "MASTER B1", nacionalidad: "GUATEMALA" },
                                    { nombre: "KENNETH JOSÉ", apellido: "ZAMORA ANDERSON", categoria: "MASTER B1", nacionalidad: "GUATEMALA" },
                                    { nombre: "HUGO", apellido: "MARTÍNEZ", categoria: "MASTER B1", nacionalidad: "GUATEMALA" },
                                    { nombre: "DEIVIS", apellido: "STEFFENS OSPINA RIOS", categoria: "MASTER B1", nacionalidad: "GUATEMALA" },
                                    { nombre: "Roger", apellido: "Marroquin", categoria: "MÁSTER B1", nacionalidad: "EL SALVADOR" },
                                    { nombre: "Carlos", apellido: "Niklitschek", categoria: "MASTER B2", nacionalidad: "CHILE" },
                                    { nombre: "Renato", apellido: "CORREA SANTORIO", categoria: "MASTER B2", nacionalidad: "BRASIL" },
                                    { nombre: "JOSÉ LUIS", apellido: "MERCADO SEGOVIA", categoria: "MASTER B2", nacionalidad: "BOLIVIA" },
                                    { nombre: "PALESTINA", apellido: "EDUARDO", categoria: "MASTER B2", nacionalidad: "MÉXICO" },
                                    { nombre: "JULIO", apellido: "FERNANDEZ", categoria: "MASTER B2", nacionalidad: "MÉXICO" },
                                    { nombre: "Claudemir", apellido: "FODI", categoria: "MASTER C1", nacionalidad: "BRASIL" },
                                    { nombre: "Marcos Antonio", apellido: "LIRA", categoria: "MASTER C1", nacionalidad: "BRASIL" },
                                    { nombre: "JOSE", apellido: "PINEDA", categoria: "MASTER C1", nacionalidad: "COLOMBIA" },
                                    { nombre: "GERMAN", apellido: "HOLGIN", categoria: "MASTER C1", nacionalidad: "COLOMBIA" },
                                    { nombre: "CESAR", apellido: "OTERO", categoria: "MASTER C1", nacionalidad: "COLOMBIA" },
                                    { nombre: "RODOLFO", apellido: "RODRIGUEZ", categoria: "MASTER C1", nacionalidad: "MÉXICO" },
                                    { nombre: "Mario", apellido: "Mossi Reyes", categoria: "MASTER C1", nacionalidad: "HONDURAS" },
                                    { nombre: "JOSÉ", apellido: "MORALES ZUGER", categoria: "MASTER C1", nacionalidad: "GUATEMALA" },
                                    { nombre: "HUMBERTO", apellido: "JAQUEZ HILARIOS", categoria: "MASTER C2", nacionalidad: "MÉXICO" },
                                    { nombre: "Cristoffer", apellido: "Fica", categoria: "OPEN", nacionalidad: "CHILE" },
                                    { nombre: "Nehemias", apellido: "Araya Tabilo", categoria: "OPEN", nacionalidad: "CHILE" },
                                    { nombre: "Nicolas", apellido: "Rozas Rali", categoria: "OPEN", nacionalidad: "CHILE" },
                                    { nombre: "Bastian Nicolas", apellido: "Valdivia Rojas", categoria: "OPEN", nacionalidad: "CHILE" },
                                    { nombre: "Ronald", apellido: "Lebel Gaete", categoria: "OPEN", nacionalidad: "CHILE" },
                                    { nombre: "ANDRES", apellido: "LOZADA", categoria: "OPEN", nacionalidad: "MÉXICO" },
                                    { nombre: "URIEL", apellido: "GONZALEZ", categoria: "OPEN", nacionalidad: "MÉXICO" },
                                    { nombre: "CARLOS JAIR", apellido: "GULLINS", categoria: "OPEN", nacionalidad: "MÉXICO" },
                                    { nombre: "EMMANUEL", apellido: "ELOISA", categoria: "OPEN", nacionalidad: "MÉXICO" },
                                    { nombre: "Carlos Jair", apellido: "Guillins Orozco", categoria: "OPEN", nacionalidad: "MÉXICO" },
                                    { nombre: "Adrián Oswaldo", apellido: "Garnica Paredes", categoria: "OPEN", nacionalidad: "ECUADOR" },
                                    { nombre: "Matías Sebastián", apellido: "Villavicencio Alvarado", categoria: "OPEN", nacionalidad: "ECUADOR" },
                                    { nombre: "GULLERMO", apellido: "ORANTES", categoria: "OPEN", nacionalidad: "GUATEMALA" },
                                    { nombre: "DYLAN", apellido: "GUERRA MENDOZA", categoria: "OPEN", nacionalidad: "GUATEMALA" },
                                    { nombre: "ERICK ADRIAN", apellido: "CARRANZA GIL", categoria: "OPEN", nacionalidad: "GUATEMALA" },
                                    { nombre: "Rayne", apellido: "Ramirez Gomez", categoria: "OPEN", nacionalidad: "REPÚBLICA DOMINICANA" },
                                    { nombre: "Carlos", apellido: "Choto", categoria: "OPEN", nacionalidad: "EL SALVADOR" },
                                    { nombre: "Daniel", apellido: "Flores", categoria: "OPEN", nacionalidad: "EL SALVADOR" },
                                    { nombre: "Carlos", apellido: "Albanez", categoria: "OPEN", nacionalidad: "EL SALVADOR" },
                                    { nombre: "Manuel", apellido: "Peña", categoria: "OPEN", nacionalidad: "EL SALVADOR" },
                                    { nombre: "CESAREO", apellido: "FRIAS", categoria: "PRE JUVENIL", nacionalidad: "MÉXICO" },
                                    { nombre: "Rodrigo", apellido: "Del Aguila Talavera", categoria: "PRE JUVENIL", nacionalidad: "PERÚ" },
                                    { nombre: "Gianluca", apellido: "Melloni Rosales", categoria: "PRE JUVENIL", nacionalidad: "PERÚ" },
                                    { nombre: "Leonardo", apellido: "CAMARGO DOS PASSOS", categoria: "PRE JUVENIL", nacionalidad: "BRASIL" },
                                    { nombre: "Theo", apellido: "Scheneppen", categoria: "PRE JUVENIL", nacionalidad: "COSTA RICA" },
                                    { nombre: "Leo", apellido: "Scheneppen", categoria: "PRE JUVENIL", nacionalidad: "COSTA RICA" },
                                    { nombre: "Santiago", apellido: "Arenas", categoria: "PRE JUVENIL", nacionalidad: "COSTA RICA" },
                                    { nombre: "Konrad", apellido: "Fischel Aason", categoria: "PRE JUVENIL", nacionalidad: "COSTA RICA" },
                                    { nombre: "CHRISTOPHER", apellido: "SILVA", categoria: "PRE JUVENIL", nacionalidad: "COLOMBIA" },
                                    { nombre: "CHRISTOPHER", apellido: "URIEL ARECHIGA", categoria: "PRE JUVENIL", nacionalidad: "MÉXICO" },
                                    { nombre: "ALEXIS", apellido: "RIVERA", categoria: "PRE JUVENIL", nacionalidad: "MÉXICO" },
                                    { nombre: "Martín Esteban", apellido: "Ramirez Martinez", categoria: "PRE JUVENIL", nacionalidad: "ECUADOR" },
                                    { nombre: "Carlos Yahir", apellido: "Rodriguez Hidalgo", categoria: "PRE JUVENIL", nacionalidad: "ECUADOR" },
                                    { nombre: "JUAN DIEGO", apellido: "RODRIGUEZ", categoria: "PRE JUVENIL", nacionalidad: "GUATEMALA" },
                                    { nombre: "Andres de la cerda", apellido: "cofino", categoria: "PRE JUVENIL", nacionalidad: "GUATEMALA" },
                                    { nombre: "Jorge", apellido: "Birbragher", categoria: "PRE JUVENIL", nacionalidad: "PANAMÁ" },
                                    { nombre: "Isaac", apellido: "Guzman", categoria: "PRE JUVENIL", nacionalidad: "EL SALVADOR" },
                                    { nombre: "Andre", apellido: "Monterroza", categoria: "PRE JUVENIL", nacionalidad: "EL SALVADOR" },
                                    { nombre: "Gabriel", apellido: "Cohen", categoria: "PRE JUVENIL", nacionalidad: "EL SALVADOR" },
                                    { nombre: "XIMENA", apellido: "MAGAÑA", categoria: "PRE JUVENIL FEMENINO", nacionalidad: "MÉXICO" },
                                    { nombre: "LUCIANA", apellido: "POLANIA", categoria: "PRE JUVENIL FEMENINO", nacionalidad: "COLOMBIA" },
                                   
                                ].map((competitor, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border px-4 py-2">{competitor.nombre}</td>
                                        <td className="border px-4 py-2">{competitor.apellido}</td>
                                        <td className="border px-4 py-2">{competitor.categoria}</td>
                                        <td className="border px-4 py-2">{competitor.nacionalidad}</td>
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

  