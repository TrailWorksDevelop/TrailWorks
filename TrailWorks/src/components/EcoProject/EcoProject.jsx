import React from 'react';
import img1 from '../../img/teamecoproject.jpeg';

const EcoProject = () => {
    return (
        <div className="bg-gradient-to-r from-gray-600 via-gray-400 to-white min-h-screen p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="flex flex-col">
                    <h1 className="mt-2 text-4xl md:text-8xl mb-6 md:mb-10 text-center font-serif text-white">ECO PROJECT</h1>
                    <p className="text-lg md:text-2xl mb-4">
                        Eco Project fue fundado por la unión de miembros de la comunidad de ciclistas salvadoreños que están comprometidos con el desarrollo del ciclismo en el país. Este proyecto busca transformar el parque en un referente de sostenibilidad, desarrollo comunitario y turismo ecológico en El Salvador. Se tiene como objetivo principal mejorar la infraestructura del parque y aumentar su atractivo tanto para la comunidad local como para turistas nacionales e internacionales.
                    </p>
                    <p className='text-base md:text-xl mt-2'>Novedad más reciente del proyecto:</p>
                    <p className='text-lg md:text-2xl mb-3 text-gray-900'>ECO FLOW - Renovación de secciones en diferentes partes de las pistas existentes</p>
                    <hr className='border-white mb-4' />
                    <p className='text-2xl md:text-3xl mt-2 font-semibold mb-5 text-white'>¿Cómo Ayudar?</p>
                    <p className='text-lg md:text-xl mb-3'>$20 membresía verano mensual</p>
                    <p className='text-lg md:text-xl mb-8'>$25 membresía invierno mensual</p>
                    <p className='text-lg md:text-xl mb-1'>CUENTA BANCARIA:</p>
                    <p className='text-lg md:text-xl font-semibold'>BAC, cuenta corriente, Manuel Peña</p>
                    <p className='text-lg md:text-xl font-semibold mb-6'>109210609, penarevelo95@gmail.com</p>

                    <hr className='border-white' />
                </div>

                <div className="flex items-center justify-center">
                    <img src={img1} alt="Trabajos recientes" className="object-cover w-full h-auto max-h-[400px] md:max-h-full" />
                </div>

            </div>
        </div>
    );
};

export default EcoProject;
