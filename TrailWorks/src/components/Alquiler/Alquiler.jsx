import React from 'react';

const Alquiler = () => {
    return (
        <div className="bg-gradient-to-r from-gray-600 via-gray-400 to-white p-4 md:p-8">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
                {/* Columna del título y párrafo en pantallas pequeñas */}
                <div className="md:hidden flex flex-col">
                    <h1 className="text-5xl font-serif text-center">
                        Alquiler de Bicicletas!
                    </h1>
                </div>

                {/* Columna del título y párrafo para pantallas medianas y grandes */}
                <div className="flex flex-col">
                    <h1 className="hidden md:block text-7xl mb-10 font-serif text-left">
                        Alquiler de Bicicletas!
                    </h1>
                    <p className="text-lg md:text-2xl mb-4">
                    Sacale provecho al Ecoparque El Espino con nuestras opciones de bicicletas disponibles solo para ti!
                    </p>
                    <p className='text-lg mb-6 md:text-2xl'>
                    Si estas interesado puedes contactar directamente a nuestro encargado del alquiler e indicarle cual bicicleta es de tu interes y a darle!
                    </p>
                    <hr className='border-black mb-4' />
                    <p className='text-2xl md:text-3xl font-semibold mb-5 text-white border-black'>BICICLETAS DISPONIBLES:</p>
                    <p className='text-base mb-2 md:text-xl'>
                        Devinci Wilson DH Bike, talla L
                    </p>
                    <p className='text-base mb-2 md:text-xl'>
                        Specialized Demo DH Bike, Talla M
                    </p>
                    <p className='text-base mb-2 md:text-xl'>
                        Giant Talon 4 XC Bike, Talla M Unisex
                    </p>
                    <p className='text-base mb-2 md:text-xl'>
                        Specialized HardRock XC Bike, Talla S Unisex
                    </p>
                    <p className='text-base mb-4 md:text-xl'>
                        Norco Rampage DJ Bike, Talla L Unisex
                    </p>
                    
                    <hr className='border-black' />

                    <h3 className='text-2xl md:text-3xl font-bold mt-6 text-white border-black'>CONTACTO ENCARGADO</h3>
                    <p className='font-semibold textblack mt-3 text-base md:text-lg'>
                        WhatsApp: +503 7045-3619
                    </p>
                    <p className='text-base md:text-lg'>Jorge Murcia</p>
                </div>
            </div>
        </div>
    );
};

export default Alquiler;

