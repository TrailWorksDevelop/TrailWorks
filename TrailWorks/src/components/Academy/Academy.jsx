import React from 'react';
import ImgSlider from '../ImgSlider';
import img1 from '../../img/academy1.jpeg';
import img2 from '../../img/academy2.jpeg';
import img3 from '../../img/academy3.jpeg';
import img4 from '../../img/academy4.jpeg';
import img5 from '../../img/academy5.jpeg';

const Academy = () => {
    const images = [img1, img2, img3, img4, img5];

    return (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-white p-4 md:p-8">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
                {/* Columna del título y párrafo en pantallas pequeñas */}
                <div className="md:hidden flex flex-col">
                    <h1 className="text-5xl mb-6 font-serif text-center">
                        TrailWorks Pro Academy
                    </h1>
                    <div className="flex items-center justify-center mb-6">
                        <ImgSlider images={images} />
                    </div>
                </div>

                {/* Columna del slider y título en pantallas medianas y grandes */}
                <div className="hidden md:flex mb-0 items-center justify-center">
                    <ImgSlider images={images} />
                </div>

                {/* Columna del título y párrafo para pantallas medianas y grandes */}
                <div className="flex flex-col">
                    <h1 className="hidden md:block text-7xl mb-10 font-serif text-left">
                        TrailWorks Pro Academy
                    </h1>
                    <p className="text-lg md:text-2xl mb-4">
                        Academia de ciclismo infantil, juvenil y adultos. 5 trails de diferentes dificultades. Espacio para niños a partir de 3 años. Bicicletas disponibles.
                    </p>
                    <p className='text-lg md:text-2xl'>
                        La academia se divide en clases para adultos y niños.
                    </p>
                    <p className='text-lg md:text-2xl mb-6'>
                        Precios de clases regulares y de paquetes: $20 niños, $25 adultos, $75 mes.
                    </p>
                    <hr className='border-black mb-4' />
                    <p className='text-2xl md:text-3xl font-semibold mb-5 text-blue-900'>ADULTOS:</p>
                    <p className='text-base md:text-xl'>
                        Clases individuales: Lunes a Sábado en horarios desde 6:00 am hasta 5:00 pm.
                    </p>
                    <p className='text-base md:text-xl mb-3'>
                        Se requiere reservación previa, clase de 1 hora.
                    </p>
                    <p className='text-base md:text-xl mb-8'>
                        Clases Grupales: Sábados: 8:30 am - 10:00 am y 3:30 pm - 5:00 pm.
                    </p>
                    <p className='text-2xl md:text-3xl font-semibold mb-5 text-blue-900'>NIÑOS:</p>
                    <p className='text-base md:text-xl'>
                        Martes: 4:00 pm - 5:30 pm.
                    </p>
                    <p className='text-base md:text-xl'>
                        Miércoles: 2:30 pm - 5:00 pm.
                    </p>
                    <p className='text-base md:text-xl'>
                        Jueves: 4:00 pm - 5:30 pm.
                    </p>
                    <p className='text-base md:text-xl mb-6'>
                        Sábado: 3:30 pm - 5:00 pm.
                    </p>

                    <hr className='border-black' />

                    <h2 className='mt-6 text-center md:text-left text-3xl md:text-4xl font-serif underline'>
                        Paquetes Especiales
                    </h2>

                    <h3 className="text-2xl md:text-3xl text-blue-800 font-semibold mt-6 mb-6">
                        *SUMMER CAMP*
                    </h3>
                    <div className='ml-4 md:ml-6'>
                        <p className='text-base md:text-lg mb-1'>
                            Summer Camp Infantil desde Junio hasta Agosto.
                        </p>
                        <div className='ml-2 text-base md:text-lg'>
                            <p>• Para niños a partir de 6 años.</p>
                            <p>• Juegos deportivos, actividades de liderazgo, kids CrossFit, actividades al aire libre.</p>
                            <p className='mb-4'>
                                • Mejoramos la confianza de los niños para tomar buenas decisiones, conocer el mundo a través de la naturaleza, valores y trabajo en equipo.
                            </p>
                            <p className='font-semibold'>
                                PRECIOS DE: $100 semana / $260 mes.
                            </p>
                        </div>
                    </div>

                    <hr className='border-black mt-6' />

                    <h3 className='text-2xl md:text-3xl font-bold mt-6 text-blue-800'>CONTACTOS ENCARGADOS</h3>
                    <p className='font-semibold text-green-700 mt-3 text-base md:text-lg'>
                        WhatsApp: +503 7045-3619
                    </p>
                    <p className='text-base md:text-lg'>Jorge Murcia</p>
                    <p className='text-base md:text-lg'>Hugo Rubio</p>
                </div>
            </div>
        </div>
    );
};

export default Academy;
