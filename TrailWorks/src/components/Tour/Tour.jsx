import React from 'react';

const Tour = () => {

    return (
        <div className="bg-gradient-to-r from-gray-600 via-gray-400 min-h-screen to-white p-4 md:p-8">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
                {/* Columna del título y párrafo en pantallas pequeñas */}
                <div className="md:hidden flex flex-col">
                    <h1 className="text-5xl font-serif text-center text-white">
                        Tours!
                    </h1>
                </div>

                {/* Columna del título y párrafo para pantallas medianas y grandes */}
                <div className="flex flex-col">
                    <h1 className="hidden md:block text-7xl mb-10 font-serif text-left text-white">
                        Tours!
                    </h1>
                    <p className="text-lg md:text-2xl mb-4">
                    Descubre la emoción de explorar rutas increíbles con nuestros Tours en bicicleta de montaña. Diseñados para ciclistas de todos los niveles, estos tours te llevarán a través de paisajes impresionantes, desafiando terrenos que despertarán tu espíritu aventurero. Únete a nosotros y vive una experiencia inolvidable en cada pedalada.
                    </p>    
                    <hr className='border-black mb-4' />
                    <p className='text-2xl md:text-3xl font-semibold mb-5 text-white border-black'>TOURS EN BICI HACIA:</p>
                    <p className='text-base font-semibold mb-2 md:text-xl'>
                        Crater de San Salvador, El Boqueron
                    </p>
                    <p className='text-base font-semibold mb-2 md:text-xl'>
                        Peñon de Comasagua
                    </p>
                    <p className='text-base font-semibold mb-2 md:text-xl'>
                        El Tunco Beach
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

export default Tour;

